import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const CLIENT_ID =
  "AdFHBu-ac-lCqSFCZNFWqkOOYAGebVU_KQ637Bly3vt_BngIcYuNpH5V1_H3CauFlGtJjK9Qj4hnFBur";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PayPalScriptProvider
      options={{
        "enable-funding": "venmo",
        "disable-funding": "credit",
        "client-id": CLIENT_ID,
      }}
    >
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
