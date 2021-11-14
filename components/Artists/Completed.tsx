import { Payer } from "@paypal/paypal-js/types/apis/orders";

type Props = {
  tip: number;
  name: string;
  payer: Payer;
};

export default function Completed({ tip, name, payer }: Props) {
  return (
    <div>
      <div>
        Thank you {payer.name.given_name} for tipping ${tip} to {name}!
      </div>
      <style jsx>
        {`
          div {
            font-size: 4rem;
            background: black;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
}
