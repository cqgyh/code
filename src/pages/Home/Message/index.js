import React, {Component} from 'react';

class Message extends Component {

    state = {
        messageArr: [
            {id: '01', title: '新闻1'},
            {id: '02', title: '新闻2'},
            {id: '03', title: '新闻3'},
        ]
    }

    render() {
        const {messageArr} = this.state;
        return (

                <ul>
                    {
                        messageArr.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
        );
    }
}

export default Message;
