import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Artists from "../components/Artists";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Artists name="teh.raptor" />
      {/* <div>
        <div>teh.raptor</div>
        <Image src={teh} />
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          // @ts-ignore
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        <button>apple pay</button>
      </div> */}
    </div>
  );
};

export default Home;
