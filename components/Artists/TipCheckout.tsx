import { PayPalButtons } from "@paypal/react-paypal-js";
import {
  CreateOrderActions,
  OnApproveActions,
  OnApproveData,
  UnknownObject,
} from "@paypal/paypal-js/types/components/buttons";
import { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders";

type Props = {
  name: string;
  tip: number;
  orderCompleted: (order: OrderResponseBody) => void;
};

export default function TipCheckout({ tip, name, orderCompleted }: Props) {
  const createOrder = (data: UnknownObject, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: tip.toString(),
          },
          description: name,
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
    console.log(data);
    return actions.order.capture().then((order) => {
      if (order.status === "COMPLETED") {
        orderCompleted(order);
      }
      if (order.status === "VOIDED") {
        // order voided
      }
    });
  };
  return (
    <div style={{ fontSize: "4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span style={{ background: "black", padding: 20 }}>${tip}</span>
      </div>
      <div style={{ marginTop: 15 }}>{name}</div>
      <div style={{ marginTop: 20 }}>
        <PayPalButtons
          style={{ color: "white" }}
          createOrder={(data, actions) => createOrder(data, actions)}
          // @ts-ignore
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}
