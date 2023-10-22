import {useState} from 'react'
import reactLogo from './assets/react.svg'
import {Button, ColorPicker, ConfigProvider, Space, theme} from 'antd';
import viteLogo from '/vite.svg'
import './MyApp.css'

function MyApp() {
    const [count, setCount] = useState(0)
    const [primary, setPrimary] = useState('#1677ff');

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: primary,
                },
            }}
        >
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <Space wrap>
                <ColorPicker showText value={primary}
                             onChangeComplete={(color) => setPrimary(color.toHexString())}/>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </ConfigProvider>
    )
}

export default MyApp
