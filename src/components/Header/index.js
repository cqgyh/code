import React, { Component } from 'react';

// Header一般组件
// 打印props当前是空对象
export default class Header extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className='page-header'>
				<h2>React Router Demo</h2>
			</div>
		);
	}
}
