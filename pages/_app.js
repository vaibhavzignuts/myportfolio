import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
