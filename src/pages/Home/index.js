import React, { Component } from 'react';

// Home和About是路由级的页面组件，它的属性将包含路由的相关属性内容，比如说：history、location、match
export default class Home extends Component {
	render() {
		console.log(this.props);
		return <div>我是Home组件</div>;
	}
}
