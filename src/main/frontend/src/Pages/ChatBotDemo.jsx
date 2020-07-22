import React,{Component} from 'react';
import ChatBotChatting from './ChatBotDemo/ChatBotChatting';
import ChatBotExtraBox from './ChatBotDemo/ChatBotExtraBox';


class ChatBotDemo extends Component{
    constructor(props){
       super(props);
       this.state={
           userData : {m_idx:2, user:'guest'},
           chatList : [
               {chatNum:1, m_idx:1, user:'챗봇', content:'안녕하세요! 궁금한 것을 물어보세요!'}
           ],   //<채팅순서, 회원고유번호, 회원닉네임, 내용>  으로 구성.
           max_chatNum : 1
        }
    }

    render(){

        return(
            <div id="ChatBotDemoPage" className="H100pct">
                <h2 className="ContentTitle">
                    ChatBotDemo
                </h2>
                <div id="ChatBotDemoMain">
                    <ChatBotChatting
                        chatData={this.state.chatList}
                        userData={this.state.userData}
                        //0721, 경호, submit버튼 누를 시 state의 chatList에 채팅내용 추가해주는 이벤트.    
                        onSubmit={function(_content){
                            var _max_chatNum = this.state.max_chatNum + 1;
                            var _userData = this.state.userData;
                            var _chatList = this.state.chatList.concat(
                                {chatNum:_max_chatNum, m_idx:_userData.m_idx, user:_userData.user, content:_content}
                            );  //state에 추가할 내용 concat
                            this.setState({
                                chatList : _chatList,
                                max_chatNum : _max_chatNum
                            }); //1.state에 대화내용 추가   2.대화내용 내부 정보인 max_chatNum(채팅순서)를 +1 해줌.
                        }.bind(this)}
                    ></ChatBotChatting>
                    <ChatBotExtraBox></ChatBotExtraBox>
                </div>
            </div>
        );
    }
}

export default ChatBotDemo;