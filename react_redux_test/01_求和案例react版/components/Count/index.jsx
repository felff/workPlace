import React, { Component } from 'react'

export default class Count extends Component {

    state = {count:0}
    //加法
    increment = () => {
        const{count} = this.state
        const{value} = this.selectNumber
        this.setState({count:count+value*1})
    }
    //減法
    decrement = () => {
        const{count} = this.state
        const{value} = this.selectNumber
        this.setState({count:count-value*1})
    }
    //奇數在加
    incrementIfOdd = () => {
        const{count} = this.state
        const{value} = this.selectNumber
        if(count%2!==0){
            this.setState({count:count-value*1})
        }      
    }
    //等等在加
    incrementAsync = () => {
        const{count} = this.state
        const{value} = this.selectNumber
        setTimeout(()=>{
        this.setState({count:count+value*1})   
        },1000)
    }
    render() {
        const {count} =this.state
        return (
            <div>
                <h1>當前求和:{count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前回奇數在加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>&nbsp;
            </div>
        )
    }
}
