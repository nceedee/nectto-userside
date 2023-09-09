import { Header } from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <>
      <Header/>
    <Component {...pageProps} />
    </>
  )
};
export default App;
