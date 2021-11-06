import { PayPalButtons } from "@paypal/react-paypal-js";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { FC, useState } from "react";
import {
  CreateOrderActions,
  OnApproveActions,
  OnApproveData,
  UnknownObject,
} from "@paypal/paypal-js/types/components/buttons";
type Props = {
  name: string;
};

const Artists: FC<Props> = ({ name }) => {
  const [view, setView] = useState(0);
  const [tipAmount, setTipAmount] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setTipAmount(e.currentTarget.value);

  const createOrder = (data: UnknownObject, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: tipAmount,
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
    <div>
      <div>{name}</div>
      <AnimateSharedLayout>
        {view === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <input onChange={onChange} type="text" />
            <button onClick={() => setView(1)}>tip?</button>
          </motion.div>
        )}
        {view === 1 && (
          <motion.div initial={{ x: -1000 }} animate={{ x: 0 }}>
            <div>{tipAmount}</div>
            <PayPalButtons
              createOrder={(data, actions) => createOrder(data, actions)}
              // @ts-ignore
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </motion.div>
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Artists;
