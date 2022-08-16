import { UserProvider } from '@auth0/nextjs-auth0'
import type { AppProps } from "next/app";
import "../styles/global.scss";
import '../build.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UserProvider>
  <Component {...pageProps} />
  </UserProvider>
  )
}

export default MyApp;
