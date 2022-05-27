import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
//創建並暴露App組件
export default class App extends Component {
  //狀態在哪操作地方在哪裡

  //初始化狀態
  state = {
    todos: [
      { id: '001', name: '吃飯', done: true },
      { id: '002', name: '睡覺', done: true },
      { id: '003', name: '打代碼', done: true },
      // {id:'004',name:'逛街',done:false}
    ]
  }

  //用於添加一個todo 接收是todo對象
  addtodo = (todoobj) => {
    //獲取原todos
    const { todos } = this.state
    //追加一個todo
    const newTodos = [todoobj, ...todos]
    //更新狀態
    this.setState({ todos: newTodos })
  }

  //用於更新todos對象
  changtodo = (id, done) => {
    //獲取todos
    const { todos } = this.state
    //匹配處理數據
    const newtodo = todos.map((todoobj) => {
      if (todoobj.id === id) return { ...todoobj, done }
      else return todoobj
    })
    this.setState({ todos: newtodo })
  }

  //用於刪除todos對象
  deletetodo = (id) => {
    const { todos } = this.state
    const newtodo = todos.filter((todoobj) => {
      return todoobj.id !== id
    })
    this.setState({ todos: newtodo })
  }

  //用於全選todos對象判斷
  alltodo = (done) => {
    const { todos } = this.state

    const newtodo = todos.map((todoobj) => {
      return { ...todoobj, done }
    })
    this.setState({ todos: newtodo })
  }

  //刪除todos全部已完成對象
  alltodoclear = () => {
    const { todos } = this.state

    const newtodo = todos.filter((todoobj) => {
      return !todoobj.done
    })
    this.setState({ todos: newtodo })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addtodo={this.addtodo} />
          <List todos={todos} changtodo={this.changtodo} deletetodo={this.deletetodo} />
          <Footer todos={todos} alltodo={this.alltodo} alltodoclear={this.alltodoclear} />
        </div>
      </div>
    )
  }
}

