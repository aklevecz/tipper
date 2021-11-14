import Head from "next/head";
import { useEffect, useLayoutEffect, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export default function Layout({ children, title }: Props) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favi.png" />
      </Head>
      {children}
      <style jsx>
        {`
          div {
            height: ${height}px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}
