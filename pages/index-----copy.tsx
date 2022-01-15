import React, { useState, createElement } from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageContainer from '../components/layouts/PageContainer';


import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;



const HomepageDefaultPage: NextPage = (props) => {


  const [collapsed, setCollapsed] = useState<{ collapsed: boolean }>({ collapsed: false });

  function toggle() {
    setCollapsed({ collapsed: !collapsed });
  }
  return (
    <PageContainer title={process.env.title}>
      <div className={styles.container}>

        <Layout className="bg-blue" style={{
          minHeight: '100vh',
        }}
        >
          <Sider trigger={null} collapsible collapsed={collapsed.collapsed} onCollapse={() => (!collapsed.collapsed)}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1 1 1  1 1 1 1 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2 2 2 2 2 2 2 2 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3 3 3 3 3  33 3  33 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                // minHeight: '100vh',
              }}
            >
              Content
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at illum consequatur eveniet officiis maiores a, quae quas dolor earum quisquam nemo esse dolores totam in excepturi. Quae, ea vero?</p>
            </Content>
          </Layout>
        </Layout>
      </div>
      {/* <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div> */}


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
export default HomepageDefaultPage;
