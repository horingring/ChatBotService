import React,{Component} from 'react';
import './css/style.css';
import Header from './contents/header/Header';
import Content from './contents/pages/Content';
import ChatBot from './contents/pages/ChatBot';
import BlockChain from './contents/pages/BlockChain';
import ChatBotDemo from './contents/pages/ChatBotDemo';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode : 'main',
            session : {id:'1', name:'visitor'}
        }
    }

    render(){
        var presentPage = null;
        if(this.state.mode === 'main'){
            presentPage =
                <Content
                    onChangePage={function(_mode){
                        this.setState({
                            mode : _mode
                        });
                    }.bind(this)}
                ></Content>
        }else if(this.state.mode === 'chatBot'){
            presentPage =
                <ChatBot
                    onChangePage={function(_mode){
                        this.setState({
                            mode : _mode
                        });
                    }.bind(this)}
                ></ChatBot>;
        }else if(this.state.mode === 'blockChain'){
            presentPage = <BlockChain></BlockChain>
        }else if(this.state.mode === 'chatBotDemo'){
            presentPage =
                <ChatBotDemo
                    name={this.state.session.name}
                ></ChatBotDemo>
        }

        return (
            <div className="Main">
                <Header onChangePage={function(_mode){
                    this.setState({
                        mode : _mode
                    });
                }.bind(this)}></Header>
                {presentPage}
            </div>
        );
    }
}

export default App;
