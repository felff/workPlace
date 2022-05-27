import React, { Component } from 'react'


export default class Count extends Component {

    state = { count: 0 }


    
    //加法
    increment = () => {
        const { value } = this.selectNumber

    }
    //減法
    decrement = () => {
        const { value } = this.selectNumber

    }
    //奇數在加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
    }
    
    //等等在加
    incrementAsync = () => {
        const { value } = this.selectNumber
        
    }
    render() {
        return (
            <div>
                <h1>當前求和:???</h1>
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
