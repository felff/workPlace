import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoing:false,
        err:'',
    }

    componentDidMount(){
        this.token = PubSub.subscribe('jeff',(_,statObj)=>{
            this.setState(statObj)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users,isFirst,isLoing,err} = this.state
        return (
            <div className="row">
                {
                isFirst? <h2>歡迎使用</h2> :
                isLoing? <h2>Longing.....</h2>:
                err ?<h2 style={{color:'red'}}>{err}</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt='header' src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
