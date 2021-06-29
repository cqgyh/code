import React, {Component} from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';


export default class Search extends Component {
    search = () => {
        PubSub.publish('getMessage', {
            isFirst: false,
            isLoading: true
        });

        axios.get('https://www.bilibili.com/index/ding.json')
            .then((res) => {
                // console.log(res)
                const users=[]
                for (const key in res.data.dance) {
                    users[key]=res.data.dance[key]
                }
                // console.log(users)
                PubSub.publish('getMessage',{
                    users,
                    isLoading: false,
                })
            })
            .catch((err) => {
                console.log(err);
                PubSub.publish('getMessage',{
                    isLoading: false,
                    err
                })

            })
    }


    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'> 点击查看舞蹈区推荐</h3>
                <button onClick={this.search}>Search</button>
            </section>
        );
    }
}
