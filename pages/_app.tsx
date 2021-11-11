import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/dist/client/router";
const CLIENT_ID =
  "AdFHBu-ac-lCqSFCZNFWqkOOYAGebVU_KQ637Bly3vt_BngIcYuNpH5V1_H3CauFlGtJjK9Qj4hnFBur";

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    // backgroundColor: "transparent",
    opacity: 1,
  },
  pageExit: {
    opacity: 0,
  },
};

const pageMotionProps = {
  initial: "pageInitial",
  animate: "pageAnimate",
  exit: "pageExit",
  variants: pageVariants,
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <PayPalScriptProvider
      options={{
        "enable-funding": "venmo",
        "disable-funding": "credit",
        "client-id": CLIENT_ID,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route} {...pageMotionProps}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </PayPalScriptProvider>
  );
}

export default MyApp;
