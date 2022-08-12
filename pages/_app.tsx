import type { AppProps } from "next/app";
import "../styles/global.scss";
import '../build.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
