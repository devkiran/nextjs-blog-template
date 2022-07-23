import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Freelance Template</title>
      </Head>
      <div className="px-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
