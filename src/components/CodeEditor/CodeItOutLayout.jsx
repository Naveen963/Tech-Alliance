import React from 'react'
import { Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import Row from '../../ui/Row';
import CodeEditor from './CodeEditor';
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const CodeItOutLayout = () => {
    const handleMenuClick = (e, item) => {

        console.log('click', item);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <div style={{ display: 'flex', maxWidth: '50%' }}>
                <Dropdown.Button menu={menuProps} icon={<UserOutlined />}  >DropDown</Dropdown.Button>
                <Dropdown.Button menu={menuProps} icon={<UserOutlined />} >DropDown</Dropdown.Button>
            </div>
            <CodeEditor />
        </>
    )
}

export default CodeItOutLayout