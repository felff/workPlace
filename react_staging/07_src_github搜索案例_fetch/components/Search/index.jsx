import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    
    search = async ()=>{
        //獲取用戶的值
        const{value}=this.keyWord
        //更新狀態對象
        PubSub.publish('jeff',{isFirst:false,isLoing:true})

        //axios
        // axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     respos=>{
        //         PubSub.publish('jeff',{ isLoing:false,users:respos.data.items})
        //     },
        //     error=>{
        //         PubSub.publish('jeff',{isLoing:false,err:error.message})
        //     }
        // )

        //fetch(未優化)
        // fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response =>{
        //         console.log('聯繫服務器成功');
        //         return response.json()
        //     },
        //     error =>{
        //         console.log('聯繫服務器失敗',error);
        //         return new Promise(()=>{})
        //     }
        // ).then(
        //     response =>{console.log('獲取數據成功',response)},
        //     error =>{console.log('獲取數據失敗',error)}
        // )

        //fetch(優化)
        try{
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${value}`) 
            const data = await response.json()
            PubSub.publish('jeff',{ isLoing:false,users:data.items})
        }
        catch(error){
            console.log('獲取數據失敗',error)
            PubSub.publish('jeff',{isLoing:false,err:error.message})
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
