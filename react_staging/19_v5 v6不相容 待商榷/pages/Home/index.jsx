import React, { Component } from 'react'
import MyNavLink from '../../component/myNavLink'
import { Route, Routes } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					{/* v6重點子组件也不需要添加父类导航名称path='/home/news' */}
					<Routes>
						<Route path='news' element={<News/>} />
						<Route path='message/*' element={<Message/>} />
					</Routes>
				</div>
			</div>
		)
	}
}
