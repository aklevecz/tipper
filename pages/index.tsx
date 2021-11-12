import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Index";
import styles from "../styles/Home.module.css";
import { Artist } from "./types";

const Home: NextPage = ({ artists }: { [key: string]: any }) => {
  return (
    <Layout title="TIPPER">
      <div className={styles.container}>
        {Object.keys(artists).map((key) => {
          const artist = artists[key];
          return (
            <Link key={key} href={`/artist/${key}`}>
              <div className="artist-link" style={{ position: "relative" }}>
                <div
                  style={{
                    background: `url(${artist.img})`,
                    backgroundSize: "cover",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                  }}
                />
                <div>{artist.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .artist-link {
            text-align: center;
            margin: 10px;
            font-size: 2rem;
            padding: 20px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const artistData = await fetch(`${process.env.HOST}/api/artists`).then((r) =>
    r.json()
  );

  return {
    props: {
      artists: artistData,
    },
  };
}
