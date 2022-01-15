import React, { createElement, useState } from 'react';
import {
    Layout,
} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
export default function HeaderDefault() {

    const [collapsed, setCollapsed] = useState<{ collapsed: boolean }>({ collapsed: false });
    function toggle() {
        setCollapsed({ collapsed: !collapsed.collapsed });
    }

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {createElement(collapsed.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
        </Header>
    )
}
