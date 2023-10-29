import {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {ColorPicker, ConfigProvider, Divider, Layout, Menu, Switch, theme} from 'antd';
import './MyApp.css'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Navigation One', 'sub1', <MailOutlined/>, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined/>, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
        type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined/>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [appearance, setAppearance] = useState('dark');
    const [current, setCurrent] = useState('1');
    const [primary, setPrimary] = useState('#9B33F4');
    const changeTheme = (value) => {
        setAppearance(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <ConfigProvider
            theme={{
                // 1. Use dark algorithm
                algorithm: appearance === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    // Seed Token
                    colorBgBase: appearance === 'dark' ? '#000000' : '#FFFFFF',
                    colorPrimary: primary,
                    borderRadius: 16,
                },
            }}
        >
            <Layout>
                <Layout.Header style={{background: 'transparent', width: '100vw',height:'100vh'}}>
                    <div style={{float: 'left'}}>
                        <ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />
                        <Divider />
                        <Switch
                            checked={appearance === 'dark'}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                        <Menu
                            selectedKeys={[current]}
                            onClick={onClick}
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            style={{
                                width: 256,
                            }}
                            items={items}
                        />
                    </div>
                </Layout.Header>
            </Layout>

        </ConfigProvider>
    );
};
export default App;
