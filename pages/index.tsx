import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Index";
import styles from "../styles/Home.module.css";
import { Artist } from "../types";

const Home: NextPage = ({ artists }: { [key: string]: any }) => {
  return (
    <Layout title="TIPPER">
      <div className={styles.container}>
        <h1
          style={{ textAlign: "center", background: "black", padding: 10 }}
        >{`Tonight's Artists`}</h1>
        {Object.keys(artists).map((key) => {
          const artist = artists[key];
          return (
            <Link key={key} href={`/artist/${key}`}>
              <div
                className="artist-link"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 100,
                  borderRadius: "20px",
                  boxShadow: "inset 1px -1px 20px 12px var(--red)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    background: `url(${artist.img})`,
                    backgroundSize: "contain",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    boxShadow: "inset 1px -1px 20px 12px var(--red)",
                  }}
                />
                {/* <img
                  src={artist.img}
                  style={{
                    position: "absolute",
                    width: "100%",
                    // height: "100%",
                    top: 0,
                    left: 0,
                    filter: "brightness(1.5) contrast(3)",
                  }}
                /> */}
                <div
                  style={{
                    position: "relative",
                    mixBlendMode: "difference",
                    color: "var(--red)",
                    fontWeight: "bold",
                    textAlign: "center",
                    background: "black",
                    userSelect: "none",
                  }}
                >
                  {artist.name}
                </div>
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
