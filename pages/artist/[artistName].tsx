import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArtistsCard from "../../components/Artists/Card";
import TipAmount from "../../components/Artists/TipAmount";
import TipCheckout from "../../components/Artists/TipCheckout";
import Layout from "../../components/Layout/Index";
import { Payer } from "@paypal/paypal-js/types/apis/orders";
import Completed from "../../components/Artists/Completed";
import { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders";

import styles from "../../styles/Artist.module.css";
import { Artist } from "../types";

type Props = {
  artist: {
    name: string;
    img: string;
  };
  path: string;
};

enum View {
  Null,
  Artist,
  TipAmount,
  TipCheckout,
  Completed,
}

const useNestedRouting = ({ view, setView }: any) => {
  const viewRef = useRef<any>(null);
  const oRef = useRef(false);
  useEffect(() => {
    if (typeof window !== "undefined" && view !== viewRef.current) {
      if (view === 1 || oRef.current) {
        window.history.replaceState({}, "", `?view=${view.toString()}`);
      } else {
        window.history.pushState({}, "", `?view=${view.toString()}`);
      }
    }
    viewRef.current = view;
    oRef.current = false;
  }, [view]);

  useEffect(() => {
    const stateChange = (event: PopStateEvent) => {
      const url = new URL(window.location.href);
      const view = url.searchParams.get("view");
      if (view) {
        setView(parseInt(view));
        oRef.current = true;
      }
    };
    window.addEventListener("popstate", stateChange);

    return () => {
      window.removeEventListener("popstate", stateChange);
    };
  }, []);
};

export default function ArtistPage({ artist: { name, img }, path }: Props) {
  const [view, setView] = useState<View>(View.Artist);
  useNestedRouting({ view, setView });
  const [tip, setTip] = useState(0);
  const [payer, setPayer] = useState<Payer | null>(null);

  const updateTip = (amount: number) => setTip(amount);

  const orderCompleted = (order: OrderResponseBody) => {
    setPayer(order.payer);
    setView(View.Completed);
    fetch("http://localhost:5000/record-donation", {
      method: "POST",
      body: JSON.stringify({ order }),
    });
  };

  return (
    <Layout title={name}>
      <div className={styles.nameTag}>
        <img src={"/smiler.svg"} />
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={styles.container}
          initial={{ x: "-120%" }}
          animate={{ x: 0 }}
          exit={{ x: "150%" }}
          key={view}
        >
          {view === View.Artist && (
            <ArtistsCard
              name={name}
              img={img}
              goToTip={() => setView(View.TipAmount)}
            />
          )}
          {view === View.TipAmount && (
            <TipAmount
              updateTip={updateTip}
              tip={tip}
              next={() => setView(View.TipCheckout)}
            />
          )}
          {view === View.TipCheckout && (
            <TipCheckout
              name={name}
              tip={tip}
              orderCompleted={orderCompleted}
            />
          )}
          {view === View.Completed && payer && (
            <Completed tip={tip} name={name} payer={payer} />
          )}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export async function getStaticProps(context: {
  params: { artistName: Artist };
}) {
  const artistData = await fetch(`${process.env.HOST}/api/artists`).then((r) =>
    r.json()
  );

  const {
    params: { artistName },
  } = context;
  return {
    props: {
      artist: artistData[artistName],
      path: artistName,
    },
  };
}

export async function getStaticPaths(context: any) {
  const artistData = await fetch(`${process.env.HOST}/api/artists`).then((r) =>
    r.json()
  );
  const paths = Object.keys(artistData).map((artistName) => ({
    params: { artistName },
  }));

  return {
    paths,
    fallback: false,
  };
}
