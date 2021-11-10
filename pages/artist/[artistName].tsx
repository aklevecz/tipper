import Pill from "../../components/Buttons/Pill";
import Layout from "../../components/Layout/Index";

type Props = {
  artist: {
    name: string;
    img: string;
  };
};

export default function Artist({ artist: { name, img } }: Props) {
  return (
    <Layout title={name}>
      <div className="container">
        <div className="heading">{name}</div>
        <div>
          <img src={img} />
        </div>
        <div>
          <Pill name="Tip" />
        </div>
        <style jsx>
          {`
            .container {
              width: 90%;
            }
            .container > * {
              margin-bottom: 10px;
            }
            .container > div:last-child {
              margin-top: 80px;
            }
            div > img {
              width: 100%;
            }
            .heading {
              font-size: 2.5rem;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

const artistData = {
  teh_raptor: { name: "Teh Raptor", img: "/teh.jpg" },
  one_child_policy: { name: "One Child Policy", img: "" },
  diamondstein: { name: "Diamondstein", img: "" },
  volta: { name: "Volta Collective", img: "/volta.png" },
};

type Artist = "teh_raptor" | "one_child_policy" | "diamondstein" | "volta";

export function getStaticProps(context: { params: { artistName: Artist } }) {
  const {
    params: { artistName },
  } = context;
  return {
    props: {
      artist: artistData[artistName],
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(artistData).map((artistName) => ({
    params: { artistName },
  }));

  return {
    paths,
    fallback: false,
  };
}
