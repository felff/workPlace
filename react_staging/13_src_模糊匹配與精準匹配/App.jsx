import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'
import MynavLink from './component/myNavLink'


export default class App extends Component {


    render() {
        return (
            <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                           <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">

                                {/* 元heml中 靠<a>跳轉到不同的頁面 */}
                                {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                                {/* React 路由切換的組件 */}
                                {/* 路徑改變時會丟失CSS樣式可改變./CSS改成/CSS或加上%PUBLIC_URL% */}
                                <MynavLink to='/about'>About</MynavLink>
                                <MynavLink to='/home/a/b'>Home</MynavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* v6switch已經被routes取代 */}
                                    {/* v6本身就開起嚴格匹配 /*可開啟模糊匹配 */}
                                    <Routes>
                                        <Route path='/about' element={<About/>}/>
                                        <Route path='/home/*' element={<Home/>} />                                        
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}