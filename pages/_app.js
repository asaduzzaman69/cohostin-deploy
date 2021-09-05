// import App from 'next/app'

import Head from "next/head";
import "./../styles/site.css";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalStyle } from "../styles/shared-styles/global.styled";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/fonts/style.css" rel="stylesheet"/>
            <link href="/fonts/style.css" rel="stylesheet"/>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
