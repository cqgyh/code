import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

import { Route, Link,NavLink,Switch } from 'react-router-dom';
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
								<Switch>
									<Route path='/about' component={About} />
									<Route path='/home' component={Home} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
