import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

  state = {mouse:false}//滑鼠移入移出的回調

  //滑鼠
  handleMouse = (flage)=>{
    return ()=>{
      this.setState({mouse:flage})
    }
  }

  //勾選的
  handleChange =(id)=>{
    return (event)=>{
       this.props.changtodo(id,event.target.checked)
    }
  }

  //刪除按鈕
  handleDelete = (id) =>{
    if(window.confirm('確定刪除嗎?')){
      this.props.deletetodo(id)
    }
  }

  render() {
    const {id,name,done}=this.props
    const {mouse} = this.state
    return (
        <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
            <span>{name}</span>
          </label>
            <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
  }
}
