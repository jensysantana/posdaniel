const { initReactI18next } = require("react-i18next");
const withPWA = require('next-pwa');
// const withNx = require('@nrwl/next/plugins/with-nx');
const runtimeCaching = require('next-pwa/cache');
/*
* Martfury - Multipurpose Marketplace React Ecommerce Template v2.2.0
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Update at: 2021-07-13T00:11:04+07:00
* */
// initReactI18next
const path = require('path')
const { i18n } = require('./next-i18next.config');
// import en from './locales/en/translation.json';
// import es from './locales/es/translation.json';
const apiUrl = process.env.NODE_ENV === 'development' ? `http://localhost:43980` : 'https://transactions.claford.com';
const clafordServerUrl = process.env.NODE_ENV === 'development' ? `http://localhost:43285` : 'https://transactions.claford.com';
const nextSettings = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  optimizeFonts: false,
  // disable eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Change your site title here
  env: {
    title: 'PostDaniel',
    titleDescription: 'PosDaniel by Claford market-place, is an online and offline shop multi purpose.',
    keyWords: 'pos, daniel, posdaniel, pos-daniel, market, marketplace, eCommerce, e-commerce, shop, online,  offline, store, sale, sales, buy, purchace, raffle, auction, phone, laptop, tablet',
    // contactEmail: '',
    // RECAPTCHA_SITE_KEY: "",
    SERVERS: {
      frontApp: {
        url: process.env.NODE_ENV === 'development' ? `http://localhost:3000` : 'https://claford.com',
      },
      authServer: {
        servUrl: process.env.NODE_ENV === 'development' ? `http://localhost:43284` : 'https://authserver.claford.com',
        apiBase: '/api/v1',
        // assetsUrl: `${apiUrl}/assets`,
        headers: {

        }
      },
      clafordServer: {
        servUrl: process.env.NODE_ENV === 'development' ? `http://localhost:43285` : 'https://transactions.claford.com',
        apiBase: '/api/v1',
        assetsUrl: `${clafordServerUrl}/assets`,
        headers: {

        }
      },
      // getweather: {
      //   fetchWeather: async (query) => {
      //     const API_KEY = 'f33a484cf794d08d0148764789aaba32';
      //     const url = 'https://api.openweathermap.org/data/2.5/weather',
      //     // const { data } = await axios.get(url, {
      //     //   params: {
      //     //     q: query,
      //     //     units: 'metric',
      //     //     APPID: API_KEY
      //     //   }
      //     // })
      //   }
      // }
    }
    // apiImgUrlBase: process.env.NODE_ENV === 'development' ? ''
  },
  i18n,
  // i18n: {
  //     // These are all the locales you want to support in
  //     // your application
  //     locales: ['en', 'es', 'fr'],
  initReactI18next: initReactI18next,
  //     // locales:Languages,
  //     // This is the default locale you want to be used when visiting
  //     // a non-locale prefixed path e.g. `/hello`
  //     defaultLocale: 'en',
  //     // This is a list of locale domains and the default locale they
  //     // should handle (these are only required when setting up domain routing)
  //     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //     // domains: [
  //     //     {
  //     //         domain: 'localhost.com',
  //     //         defaultLocale: 'en-US',
  //     //     },
  //     //     {
  //     //         domain: 'localhost.nl',
  //     //         defaultLocale: 'nl-NL',
  //     //     },
  //     //     {
  //     //         domain: 'localhost.fr',
  //     //         defaultLocale: 'fr',
  //     //         // an optional http field can also be used to test
  //     //         // locale domains locally with http instead of https
  //     //         http: true,
  //     //     },
  //     // ],
  // },

};

module.exports = withPWA(
  {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      // scope: '/app',
      // sw: 'service-worker.js',
    },
    ...nextSettings
  });