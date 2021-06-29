import React from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Search />
                <List />
            </div>
        );
    }
}

export default App;
