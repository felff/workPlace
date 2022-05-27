import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class List extends Component {

  //做一個函數的限制
  static propTypes ={
    todos:PropTypes.array.isRequired,
    changtodo:PropTypes.func.isRequired,
    deletetodo:PropTypes.func.isRequired
  }

  render() {
    const {todos,changtodo,deletetodo} =this.props
    return (
    <ul className="todo-main">
        {
          todos.map(todo=>{
            return <Item key={todo.id} {...todo} changtodo={changtodo} deletetodo={deletetodo}/>
          })
        }
    </ul>
    )
  }
}
