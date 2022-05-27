//引入react
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'

import { BrowserRouter} from 'react-router-dom';
//引入App組件
import App from './App'


//渲染App到頁面
ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById('root')
);