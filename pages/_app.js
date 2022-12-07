import "../styles/globals.css";
import Layout from "../components/Layout";
import { StateProvider } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  );
}

export default MyApp;
