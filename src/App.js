import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

import { Route, Link,NavLink } from 'react-router-dom';
/*
Route:它是单个的路由对象
BrowserRouter就是Router的一种，它是用state模式进行控制的
HashRouter也是Router的一种，它是用hash锚点进行控制的
Link：链接，相当于A标签
*/

class App extends React.Component {
	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-xs-offset-2 col-xs-8'>
						{/* Header是一般组件呢 */}
						<Header />
					</div>
				</div>
				<div className='row'>
					<div className='col-xs-2 col-xs-offset-2'>
						<div className='list-group'>
							{/*
								1.原生的html中，其A标签的作用是进行不同页面的跳转
								2.在React当中，则需要利用路由切换实现页面组件的切换
								3.利用原生的A标签，操作BrowserRouter与HashRouter其结果是不一致的
									1)BrowserRouter进行页面的跳转时会将整个页面刷新
									2)HashRouter进行页面的的跳转时只是实现了组件的重绘与显示，页面不再刷新，资源不再请求
								4.BrowserRouter与HashRouter进行Route包裹时还是有差异的，HashRouter可以包裹Route以及Link，但是BrowserRouter只能对Route以及Link进行单一的包裹
							*/}
							{/* <a className='list-group-item' href='#/about'>
								About
							</a>
							<a className='list-group-item active' href='#/home'>
								Home
							</a> */}
							{/* 在路由之外不能单独的设置Link，否则报错 */}

							<NavLink to='/about' className='list-group-item' activeClassName='active' activeStyle={{
								fontWeight: "bold",
								color: "red",
								backgroundColor:'pink'
							}}>
								About
							</NavLink>
							<NavLink to='/home' className='list-group-item' activeClassName='active'>
								Home
							</NavLink>
						</div>
					</div>
					<div className='col-xs-6'>
						<div className='panel'>
							<div className='panel-body'>
								{/*
								1.静态路由表
								2.分配地址
								3.统一入口
								4.寻找地址
								*/}
								{/*
								1.只设置Route会报以一个错误，错误的意思是：不应该在Router外面使用Route，也就是说应该用Router把Route给包裹起来
								*/}
								{/* About和Home是页面组件呢 */}
								<Route path='/about' component={About} />
								<Route path='/home' component={Home} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
