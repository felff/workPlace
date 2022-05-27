import React, { Component } from 'react'
import{Link,Route,Routes} from 'react-router-dom'
import Detail from './Detail'

export default class Messages extends Component {

    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgobj) => {
                            return (
                                <li key={msgobj.id}>
                                    {/* 向路由器傳遞params參數 */}
                                    {/* <Link to={`/home/message/detail/${msgobj.id}/${msgobj.title}`}>{msgobj.title}</Link> */}

                                    {/* 向路由器傳遞search參數 */}
                                    <Link to={`/home/message/detail/?id=${msgobj.id}&title=${msgobj.title}`}>{msgobj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    {/* 聲明接收params參數 */}
                    {/* <Route path='detail/:id/:title' element={<Detail/>}/> */}

                    {/* search參數無須聲明接收 */}
                    <Route path='detail' element={<Detail/>}/>
                </Routes>               
            </div>
        )
    }
}
