import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './MyApp.jsx'
import './index.css'
import {App} from "antd";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App>
            <MyApp/>
        </App>
    </React.StrictMode>,
)
