import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
    
    state ={//初始化狀態
        users:[],//初始值為一個物件
        isFirst:true,//是否第一次打開葉面
        isLoading:false,//標題載入中
        err:'',//儲存請求相關錯誤訊息
    }

    //更新app state
    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}