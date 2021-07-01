import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MessageDetails from "./MessageDetails";

class News extends Component {
    state = {
        messageArr: [
            {id: '01', title: '信息1'},
            {id: '02', title: '信息2'},
            {id: '03', title: '信息3'},
        ],
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.messageArr.map((item) => {
                        return (
                            <li key={item.id}>
                                {/*传参方式1：*/}
                                {/*<NavLink to={`/home/message/message/${item.id}/${item.title}`}>{item.title}</NavLink>&nbsp;&nbsp;*/}
                                {/*传参方式2*/}
                                {/*<NavLink to={*/}
                                {/*    {*/}
                                {/*        pathname: '/home/message/message_details',*/}
                                {/*        search: `?id=${item.id}&title=${item.title}`,*/}

                                {/*}>{item.title}</NavLink>&nbsp;&nbsp;*/}
                                {/*传参方式3*/}
                                <NavLink to={
                                    {
                                        pathname: '/home/message/message_details',
                                        state: {
                                            id: item.id,
                                            title: item.title,
                                        }

                                    }
                                }>{item.title}</NavLink>&nbsp;&nbsp;
                            </li>
                        )

                    })}

                    {/*<li>*/}
                    {/*    <NavLink to="/home/message/message/2">message002</NavLink>&nbsp;&nbsp;*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink to="/home/message/message/3">message003</NavLink>&nbsp;&nbsp;*/}
                    {/*</li>*/}
                </ul>
                <hr/>
                <Switch>
                    {/*传参方式1：*/}
                    {/*<Route path="/home/message/message/:id/:title" component={MessageDetails}/>*/}
                    {/*传参方式2*/}
                    <Route path="/home/message/message_details" component={MessageDetails}/>
                    {/*<Redirect to="/home/message"/>*/}
                </Switch>
            </div>
        );
    }
}

export default News;
