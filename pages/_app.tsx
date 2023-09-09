import { Header } from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <div className="m-auto h-full w-full  max-w-7xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
};
export default App;
