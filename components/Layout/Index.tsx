import Head from "next/head";
import { useLayoutEffect, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export default function Layout({ children, title }: Props) {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
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
          }
        `}
      </style>
    </div>
  );
}
