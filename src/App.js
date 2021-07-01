import React from 'react';
import Header from './components/Header';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";


class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to="/about" activeClassName='cqq'>About</NavLink>
                            <NavLink className="list-group-item" to="/home" activeClassName='cqq'>Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Redirect to="/"/>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default App;
