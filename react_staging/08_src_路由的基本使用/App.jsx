import React, { Component } from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {


    render() {
        return (
            <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">

                                {/* 元heml中 靠<a>跳轉到不同的頁面 */}
                                {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                                {/* React 路由切換的組件 */}
                                <Link className="list-group-item " to='/about'>About</Link>
                                <Link className="list-group-item " to='/home'>Home</Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Routes>
                                       <Route path='/about' element={<About/>} />
                                        <Route path='/home' element={<Home/>} /> 
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}