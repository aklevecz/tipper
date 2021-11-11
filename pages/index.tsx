import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Index";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="TIPPER">
      <div className={styles.container}>
        <Link href="/artist/volta">
          <div className="artist-link">Volta</div>
        </Link>
        <Link href="/artist/teh_raptor">
          <div className="artist-link">teh raptor</div>
        </Link>
        <Link href="/artist/diamondstein">
          <div className="artist-link">Diamondstein</div>
        </Link>
        <Link href="/artist/one_child_policy">
          <div className="artist-link">One Child Policy</div>
        </Link>
        <Link href="/artist/p.rugo">
          <div className="artist-link">p.rugo</div>
        </Link>
      </div>
      <style jsx>
        {`
          .artist-link {
            background: var(--light-grey);
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
