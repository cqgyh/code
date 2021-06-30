import React, { Component } from 'react';
import Message from './Message'
import News from './News'
import {NavLink,Route,Switch,Redirect} from "react-router-dom";

// Home和About是路由级的页面组件，它的属性将包含路由的相关属性内容，比如说：history、location、match
export default class Home extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className='nav nav-tabs'>
						<li>
							{/*
							多层嵌套的路由路径：上层路由为前缀+当前路径为拼接
							上层路由不建议使用exact精确匹配
							*/}
							<NavLink to='/home/news' className='list-group-item'>
								News
							</NavLink>
						</li>
						<li>
							<NavLink to='/home/message' className='list-group-item'>
								Message
							</NavLink>
						</li>
					</ul>

					<Switch>
						<Route path='/home/news' component={News}/>
						<Route path='/home/message' component={Message}/>
						<Redirect to='/home/news'/>
					</Switch>
				</div>
			</div>
		);
	}
}
