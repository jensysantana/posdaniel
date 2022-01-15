import React from 'react';
import Head from 'next/head';
// import HeaderDefault from '~/components/shared/headers/HeaderDefault';
// import HeaderMobile from '~/components/shared/headers/HeaderMobile';
// import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import { useTranslation } from 'react-i18next';
import { AppProps } from 'next/app';

const initHeaders = (
    <>
        {/* <HeaderDefault />
        <HeaderMobile /> */}
    </>
);
const initFooters = (
    <>
        {/* <FooterFullwidth /> */}
    </>
);

function PageContainer({
    // header = initHeaders,
    // footer = initFooters,
    children,
    title = 'Page',
}: any) {
    let titleView;

    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
                <meta name="description" content={process.env.titleDescription} />
                <link rel="icon" href="/static/img/icons/favi2.png" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
            </Head>
            {/* {header} */}
            {children}
            {/* {footer} */}
        </>
    );
};

export default PageContainer;
