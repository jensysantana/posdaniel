import React, { useState, createElement, useEffect, StyleHTMLAttributes, useRef, Children } from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'
// import styles from './index.dashboard'
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageContainer from '../components/layouts/PageContainer';

import {
  Layout,
  Menu,
  Breadcrumb,
  Skeleton,
  Switch,
  Card,
  Avatar,
  Row,
  Col,
  Typography,
  Button,
  Tabs,
  Radio
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DollarCircleOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteRowOutlined,
  DeleteColumnOutlined,
  DeleteFilled,
  DeleteOutlined,
  DeleteTwoTone,
  MessageOutlined
} from '@ant-design/icons';
{/* <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} /> */ }
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { RemoveCircleOutline } from "@material-ui/icons";


import { ListStyle } from 'antd/lib/transfer';
const img = 'data:image/jpeg;base64,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'

const { Meta } = Card;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

const HomepageDefaultPage: NextPage = (props) => {

  const [collapsed, setCollapsed] = useState<{ collapsed: boolean }>({ collapsed: false });
  const [isLoading, setIsLoading] = useState<{ isLoading: boolean }>({ isLoading: false });
  const ref = useRef<boolean>(false);

  const [windSize, setWindSize] = useState<number>(300);
  function toggle() {
    setCollapsed({ collapsed: !collapsed.collapsed });
  }

  console.log('windSize');
  console.log(windSize);
  console.log('windSize');
  useEffect(() => {
    // make sure your function is being called in client side only
    if (typeof window !== 'undefined' && !ref.current) {
      // detect window screen width function
      ref.current = true;
      setWindSize(window.innerHeight);
    }
    window.addEventListener('resize', () => {
      // console.log(window.innerHeight, window.innerWidth);
      setWindSize(window.innerHeight);
    })
  }, [windSize])

  return (
    <PageContainer title={process.env.title}>
      <div className={styles.container}>

        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={collapsed.collapsed}
            onCollapse={() => setCollapsed({ collapsed: !collapsed.collapsed })}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="7">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="8" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
            {/* <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header> */}

            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>

            <Content
              className="site-layout-background"
              style={{
                maxHeight: '100vh',
                overflow: 'hidden'
              }}>
              {/* <Title style={{ fontSize: 16 }}>Dashboard</Title> */}
              <Row
                style={{ overflow: 'hidden', height: '100%', }}
              // className="bg-success"

              >
                <Col span={16}>
                  <SlidingTabs>
                    <div
                      className={styles.containerCardAntd}
                    // style={{ padding: 10 }}
                    >
                      {arrayCard.map((c, i) => (
                        <CustomCard
                          key={i}
                          {...props}
                          cardStyle={styles.cardStyle}
                          cardClassName="cart-product cursor-pointer"
                          onDoubleClick={() => {
                            console.log('onDouble ----- click');
                            console.log();
                            console.log('onDouble ----- click');
                          }}
                          onClick={() => {
                            console.log('onclick');
                            console.log();
                            console.log('onclick');
                          }}
                        />
                      ))}
                    </div>
                  </SlidingTabs>

                </Col>
                <Col span={8} style={{
                  // background: 'yellow',
                  width: '100%',
                  padding: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflowY: 'hidden'
                }}
                >
                  <Card style={{
                    // background: '#ff0000',
                    width: '100%',
                    height: '100%', padding: 0
                  }}>
                    <ul
                      className="ul-containersale-list"
                      style={{
                        // width: '100%',
                        // listStyle: 'none',
                        // padding: '3px 1px',
                        // background: 'blue',
                        // marginRight: 5,
                        minHeight: windSize - 360,
                        // overflowY: 'scroll',
                      }}
                    >
                      {array.map((f) => (

                        <li key={f} className={styles.listSale}>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexWrap: 'nowrap',
                            // background: 'blue',
                            alignItems: 'center',
                            paddingTop: 4,
                            // paddingBottom: 4
                          }}>
                            <div>
                              <strong style={{ marginRight: 5 }}>1</strong><strong>Coke</strong>
                            </div>
                            <div className="">
                              <span
                                className=""
                                style={{ marginRight: 5 }}
                              >
                                $9.34
                              </span>
                              <span
                                className="text-danger"
                                style={{ marginRight: 5 }}
                              >
                                {/* <DeleteRowOutlined />
                                <DeleteColumnOutlined />
                                <DeleteFilled />
                                <DeleteOutlined /> */}
                                {/* <DeleteTwoTone color="#ff0000" /> */}
                                {/* <DeleteTwoTone style={{ fontSize: '30px', color: 'red' }} /> */}
                                <RemoveCircleOutline className="cursor-pointer" style={{ top: -10, marginTop: -2 }} htmlColor="#ff0000" fontSize="small" />
                              </span>
                            </div>
                          </div>


                          <p className="bg-dangerxx" style={{ marginLeft: 10 }}>
                            <img

                              draggable="false"
                              height="30"
                              width="50"
                              src={img}
                            /> Coke cola botterl 670 OZ
                          </p>
                        </li>
                      ))}
                    </ul>
                    <hr />
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between align-items-center">
                        <big className="text-danger">Total Items:</big> <strong>3</strong>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <big className="text-danger" >Coupon:</big> <strong>$2.00</strong>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <big className="text-danger" >Dicount:</big> <strong>$4.00</strong>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <big className="text-danger" >Sub Total:</big> <strong>$38.90</strong>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                      </li>
                      <hr />
                      <li className="d-flex justify-content-between align-items-center">

                        <Button
                          style={{
                            textAlign: 'left',
                            backgroundColor: '#167347',
                            padding: 23,
                            borderRadius: 8
                          }}
                          type="primary"
                          block
                          icon={
                            <>
                              <div
                                className="d-flex justify-content-around align-items-center px-2"
                              >
                                <DollarCircleOutlined />
                                <big className=" mx-3" ><strong><i>Pay</i></strong></big>
                              </div>
                              <strong className="pr-5">$32.90</strong>
                            </>
                          }
                          loading={isLoading.isLoading}
                          onClick={() => setIsLoading({ isLoading: !isLoading.isLoading })}
                          className="d-flex justify-content-between align-items-center px-2"
                        >
                          {/* <div > */}
                          {/* {!isLoading.isLoading && <PoweroffOutlined />}<big className="text-danger" ><strong>Pay</strong></big> */}
                          {/* </div> */}

                        </Button>
                        {/* <Button
                          type="primary"
                          // icon={<PoweroffOutlined />}
                          loading={isLoading.isLoading}
                          onClick={() => setIsLoading({ isLoading: !isLoading.isLoading })}
                          block
                        >
                        </Button> */}

                      </li>
                    </ul>
                  </Card>
                </Col>
              </Row>
            </Content>

            {/* <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ??2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>
      </div>
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



function CustomCard({ cardStyle, cardClassName = '', ...props }: any) {
  const [isLoading, setIsLoading] = useState<{ isLoading: boolean }>({ isLoading: true });


  useEffect(() => {


    async function setCard() {
      setTimeout(() => {
        return setIsLoading({ isLoading: false });
      }, 2000);
    }

    setCard();

    return () => {

    }

  }, [])


  return (
    <>
      {/* <Switch checked={!isLoading.isLoading} onChange={() => !isLoading.isLoading} /> */}

      <Card className={cardClassName}
        // style={{ marginTop: 16 }}
        style={{ padding: 0 }}
        loading={isLoading.isLoading}
        onDoubleClick={props.onDoubleClick}
        onClick={props.onClick}
      >
        <Meta
          className={cardStyle}
          // style={{ padding: 10 }}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description aa a  a a a aa a a a a "

        />
      </Card>

      {/* <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={isLoading.isLoading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card> */}
    </>
  );

}

const { TabPane } = Tabs;
const arrayTabs = [
  {
    name: 'Laptops',
    _id: '1',
    isDefault: false,
  },
  {
    name: 'Celphone',
    _id: '2',
    isDefault: true,
  },
  {
    name: 'Tv\'s',
    _id: '3',
    isDefault: false,
  },
  {
    name: 'Batteries',
    _id: '4',
    isDefault: false,
  },
  {
    name: 'Chargers',
    _id: '5',
    isDefault: false,
  },
  {
    name: 'Cables',
    _id: '6',
    isDefault: false,
  },
  {
    name: 'Speakers',
    _id: '7',
    isDefault: false,
  },
  {
    name: 'Bluetooths',
    _id: '8',
    isDefault: false,
  },
  {
    name: 'LCD\'s',
    _id: '9',
    isDefault: false,
  },
  {
    name: 'Covers',
    _id: '10',
    isDefault: false,
  },
  {
    name: 'Protectors',
    _id: '11',
    isDefault: false,
  },
];


function SlidingTabs({ children }: any) {

  const ref = useRef<boolean>(false);

  const [windSize, setWindSize] = useState<number>(300);

  useEffect(() => {
    // make sure your function is being called in client side only
    if (typeof window !== 'undefined' && !ref.current) {
      // detect window screen width function
      ref.current = true;
      setWindSize(window.innerHeight);
    }
    window.addEventListener('resize', () => {
      // console.log(window.innerHeight, window.innerWidth);
      setWindSize(window.innerHeight);
    })
  }, [windSize])

  const [state, setState] = useState({
    mode: 'top',
  });

  function handleModeChange(e: any) {
    const mode = e.target.value;
    setState({ mode });
  }

  const { mode } = state;

  return (
    <div>
      {/* <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group> */}
      <Tabs
        defaultActiveKey="1"
        style={{
          // backgroundColor: '#fff',
          // overflowY: 'scroll'
        }}
        onClick={() => {
          console.log('');
          console.log(999);
          console.log('');
        }}>
        {/* {[...Array.from({ length: 70 }, (v, i) => i)].map(i => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}
          >
            Content of tab {i}
          </TabPane>
        ))} */}

        {arrayTabs.map((tb, i) => (
          <TabPane
            tab={tb.name}
            key={tb._id} disabled={i === 28}
            style={{
              height: windSize - 126,
              // backgroundColor: 'violet',
              overflowY: 'scroll'
            }}
          >
            {children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );

}
export default HomepageDefaultPage;
