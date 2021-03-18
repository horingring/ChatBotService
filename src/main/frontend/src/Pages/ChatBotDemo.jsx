import React, { Component } from "react";
import ChatBotChatting from "./ChatBotDemo/ChatBotChatting";
import ChatBotExtraBox from "./ChatBotDemo/ChatBotExtraBox";
import bulb from "../img/lightbulb.jpg";

class ChatBotDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: { m_idx: 2, user: "guest" },
      chatList: [
        {
          chatNum: 1,
          m_idx: 1,
          user: "챗봇",
          content: "안녕하세요! 궁금한 것을 물어보세요!",
        },
        {
          chatNum: 2,
          m_idx: 3,
          user: "지나가는사람",
          content: "나도껴줘 얘들아 관심좀 줘",
        }, //예시용으로 다른 유저 추가함. 조금 변경하면 채팅어플로 변형 가능
      ], //<채팅순서, 회원고유번호, 회원닉네임, 내용>  으로 구성.
      max_chatNum: 2, //예시용 유저 빼면 max_chatNum : 1  로 변경할 것.
    };
  }

  render() {
    return (
      <div id="ChatBotDemoPage">
        <div className="IntroImg xyCenter" id="IntroImg_ChatBotDemo">
          <div className="xyCenter">
            <h1>ChatBot Demo</h1>
            <p>챗봇 데모 페이지입니다.</p>
          </div>
        </div>
        <article className="Article-Container">
          <h2 className="ContentTitle article_title">ChatBotDemo</h2>
          <div id="ChatBotDemoMain">
            <ChatBotChatting
              //0722, 경호, ChatBotChatting 컴포넌트에 props로 뿌려주는 데이터(채팅List, user의 session)
              chatData={this.state.chatList}
              userData={this.state.userData}
              //0721, 경호, submit버튼 누를 시 state의 chatList에 채팅내용 추가해주는 이벤트.
              onSubmit={function (_content) {
                var _max_chatNum = this.state.max_chatNum + 1;
                var _userData = this.state.userData;
                var _chatList = this.state.chatList.concat({
                  chatNum: _max_chatNum,
                  m_idx: _userData.m_idx,
                  user: _userData.user,
                  content: _content,
                }); //state에 추가할 내용 concat
                this.setState({
                  chatList: _chatList,
                  max_chatNum: _max_chatNum,
                }); //1.state에 대화내용 추가   2.대화내용 내부 정보인 max_chatNum(채팅순서)를 +1 해줌.
              }.bind(this)}
            ></ChatBotChatting>
            <ChatBotExtraBox></ChatBotExtraBox>
          </div>
        </article>
      </div>
    );
  }
}

export default ChatBotDemo;
