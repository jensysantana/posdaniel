import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css';
import '../scss/posdaniel/pos.scss';
// import '../scss/utils/_pos_variables.scss';
import '../scss/elements/pos-operator-panel.scss';

import './testpos/styles.css';



// import '../public/static/fonts/Linearicons/Font/demo-files/demo.css';
// import '../public/static/fonts/font-awesome/css/font-awesome.min.css';
// import '../public/static/css/bootstrap.min.css';
// import '../public/static/css/slick.min.css';
// import '../scss/style.scss';


// import '../scss/home-default.scss';
// import '../scss/market-place-1.scss';
// import '../scss/market-place-2.scss';
// import '../scss/market-place-3.scss';
// import '../scss/market-place-4.scss';
// import '../scss/electronic.scss';
// import '../scss/furniture.scss';
// import '../scss/organic.scss';
// import '../scss/technology.scss';
// import '../scss/autopart.scss';
// import '../scss/electronic.scss';

import type { AppProps } from 'next/app'
import { storePersistor, wrapper } from '../store/store';
import { appWithTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';


import MasterLayout from '../components/layouts/MasterLayout';
import Api from '../store/auth2/request/auth';
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(function () {
      // document.getElementById('__next').classList.add('loaded');
    }, 100);
  });

  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
  }, []);
  const [state, setstate] = useState(() => '');

  useEffect(() => {
    async function getCsrf() {
      const resp = await Api.AUTH.getCsrfAuth({ lang: { code: 'en' } });
      setstate(() => resp.data.token);
      // setstate(() => '');
    }
    // getCsrf();

    console.log('11111111111111111111 ______APPPPP');

    return () => {

    }
  }, []);
  const { setUserLang }: any = useSelector(st => {
    return {
      ...st
    }
  })
  return (
    <CookiesProvider>
      <MasterLayout>
        {/* <Component {...pageProps} /> */}
        <PersistGate loading={<p style={{ textAlign: 'center' }}>Loading...</p>} persistor={storePersistor.persistor}>
          <Component {...pageProps} csrf={state} appLang={setUserLang} />
        </PersistGate>
      </MasterLayout>
    </CookiesProvider>
  );
}

// export default MyApp
export default wrapper.withRedux(appWithTranslation(MyApp));
