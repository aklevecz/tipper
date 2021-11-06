import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

import teh from "./teh.jpg";
import {
  CreateOrderActions,
  OnApproveActions,
  OnApproveData,
  UnknownObject,
} from "@paypal/paypal-js/types/components/buttons";
import Artists from "../components/Artists";

const Home: NextPage = () => {
  const createOrder = (data: UnknownObject, actions: CreateOrderActions) => {
    console.log(data);
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
    console.log(data);
    return actions.order.capture();
  };
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
