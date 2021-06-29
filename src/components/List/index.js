import React, {Component} from 'react';

import PubSub from 'pubsub-js';

export default class List extends Component {
    state = {
        users: [],
        isLoading: false,
        err: '',
        isFirst: true
    }

    componentDidMount() {
        // console.log(PubSub);
        this.getMessage = PubSub.subscribe('getMessage', (mess, data) => {
            // console.log(mess);
            // console.log(data);
            this.setState(data)
            console.log(this.state);

        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.getMessage)
    }


    render() {
        const {users, isLoading, err, isFirst} = this.state;
        console.log(this.state);

        return (
            <div className='row'>
                {isFirst ? (
                    <h2>欢迎使用，点击查询</h2>
                ) : isLoading ? (
                    <h2>Loading...</h2>
                ) : err ? (
                    <h2 style={{ color: 'red' }}>{err.toString()}</h2>
                ) : (
                    users.map((item,index) => {
                        console.log(item)
                        return (
                            <div className='card' key={item.aid}>
                                {/* eslint-disable-next-line no-undef */}
                                <a href={item['short_link']} target='_blank' rel='noreferrer'>
                                    <img alt='thumb' src={item.pic} style={{ width: 100 + 'px' }} />
                                </a>
                                <p className='card-text'>{item.title}</p>
                            </div>
                        );
                    })
                )}
            </div>

        );
    }
}
