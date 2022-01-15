import React from 'react';

// import type { NextPage } from 'next'
// import Image from 'next/image';


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageContainer from '../../components/layouts/PageContainer';

import {
    Layout,
    Row,
} from 'antd';
{/* <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} /> */ }

import { AppProps } from 'next/app';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import ProductSideDefault from '../../components/partials/pos/product-side/ProductSideDefault';
import SalesDefaultSide from '../../components/partials/pos/sales-side/SalesDefaultSide';

const { Content } = Layout;

export default function DefaultPOSView(props: AppProps) {


    return (
        <PageContainer title={process.env.title}>
            {/* <div className={styles.container}> */}

            {/* <Layout style={{ minHeight: '100vh' }}> */}

            {/* <HeaderDefault /> */}
            <Content
                className="site-layout-background"
                style={{
                    maxHeight: '100vh',
                    overflow: 'hidden'
                }}>
                {/* <Title style={{ fontSize: 16 }}>Dashboard</Title> */}
                <Row
                    style={{
                        overflow: 'hidden',
                        height: '100%',
                    }}
                    className="pos-background"
                >
                    <ProductSideDefault />
                    <SalesDefaultSide />
                </Row>
            </Content>
            {/* </Layout> */}
            {/* </div> */}
        </PageContainer>
    )
}


export async function getServerSideProps({ locale, ...rest }: any) {
    console.log('222222222222222 INDEX....');
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'auth', 'header', 'footer'])),
        }, // will be passed to the page component as props
    }
}