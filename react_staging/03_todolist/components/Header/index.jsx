import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  //做一個函數的限制
  static propTypes ={
    addtodo:PropTypes.func.isRequired
  }
  //鍵盤事件回調
  handleKeyUp =(event)=>{
    const{keyCode,target} = event
    //判斷是否按enter
    if(keyCode !== 13) return
    //添加的todo不能為空值
    if(target.value.trim() ===''){
      alert('輸入不能空白')
      return
    }
    //創建一個obj todo對象
    const todoobj ={id:nanoid(),name:target.value,done:false}
    //將todoobj回傳給App
    this.props.addtodo(todoobj);  
    //輸入完反白
    target.value=''
  }

  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的名稱案enter"/>
      </div>
    )
  }
}
