import React, {Component} from 'react';
import querystring from'querystring'
const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，硅谷' },
    { id: '03', content: '你好，武汉' },
];

class MessageDetails extends Component {

    render() {
        console.log(this)
        {/*接参方式1：*/}
        // const {id,title}=this.props.match.params;
        // console.log(id,title)
        // const {content}=DetailData.find((item) => {
        //     return +item.id===+id
        // })
        {/*接参方式2：*/}
        // console.log(this.props.location.search.slice(1));
        // const {id,title}=querystring.parse(this.props.location.search.slice(1))
        // const {content}=DetailData.find((item) => {
        //     return +item.id===+id
        // })
        {/*接参方式3：*/}
        const {id,title}=this.props.location.state;
        const {content}=DetailData.find((item) => {
            return +item.id===+id
        })

        return (
            <ul>11
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>

        );
    }
}

export default MessageDetails;
