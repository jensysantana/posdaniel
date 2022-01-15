
import React, { useState, useEffect } from 'react';
import { Card, Avatar } from "antd";


const { Meta } = Card;

export default function ProductCardDefault({ cardStyle, cardClassName = '', ...props }: any) {
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
