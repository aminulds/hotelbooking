import { useEffect } from 'react';
import { ContextProvider } from '../context/ContextProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>

}

export default MyApp
