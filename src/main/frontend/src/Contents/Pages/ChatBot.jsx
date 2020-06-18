import React,{Component} from 'react';

class ChatBot extends Component{
  render(){
    return (
      <div className="ChatBot">
        <div className="ChatBot_header">
          <div className="ChatBot_title">
            <p>welcome to</p>
            <h1>ChatBot</h1>
          </div>
        </div>
        <section className="ChatBot_Content_Container">
          <div className="ChatBot_Content_innerContainer">
            <div className="ChatBot_Demo_Btn_Container">
              <div 
                className="ChatBot_Deomo_Btn"
                onClick={function(){
                  this.props.onChangePage('chatBotDemo');
                }.bind(this)}
                >
                <h1>Demo</h1>
                <p>Version 1.0</p>
              </div>
            </div>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
            <p>여기는 내용입니다.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default ChatBot;
