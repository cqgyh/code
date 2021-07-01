import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
    render() {
        return (

            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/news"  activeClassName='cqq'>News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item " to="/home/message"  activeClassName='cqq'>Message</NavLink>
                        </li>
                    </ul>

                   <Switch>
                       <Route path="/home/news" component={News}/>
                       <Route path="/home/message" component={Message}/>
                       <Redirect to="/home/message"/>
                   </Switch>

                </div>
            </div>

        );
    }
}

export default Home;
