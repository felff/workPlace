import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  //全選
  handleAll = (event) => {
    this.props.alltodo(event.target.checked)
  }

  //清除
  todoAllClear = () => {
    this.props.alltodoclear()
  }

  render() {
    const { todos } = this.props
    //已完成
    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
    console.log(doneCount);
    //總數
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleAll} checked={total === doneCount && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.todoAllClear}>清除已完成任务</button>
      </div>
    )
  }
}
