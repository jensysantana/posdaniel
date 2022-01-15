import React from 'react'
import { Button } from "antd";

export default function ButtonIconSalesOperations({ styles, btnText, icon }: any) {
    return (
        <>
            <Button
                icon={icon}
                // icon={<StarOutlined style={{ marginTop: 4 }} />} 
                size="large"
                style={{ flex: '2', backgroundColor: '#ff0', verticalAlign: 'normal', ...styles }}
            >
                {btnText}
            </Button>
        </>
    )
}
