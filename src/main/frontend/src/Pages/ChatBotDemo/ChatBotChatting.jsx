import React,{Component} from 'react';

class ChatBotChatting extends Component{

    render(){
        var chatList = [];
        var chatData = this.props.chatData;
        var userData = this.props.userData;
        for(var i=0; i<chatData.length; i++){
            chatList.push(
                <div 
                  className={'chatNextBox'+ (chatData[i].m_idx===userData.m_idx?' chatBox_right':'')}
                  key={chatData[i].chatNum}
                >
                    <div className="chatBox">
                        {chatData[i].content}
                    </div>
                </div>
            );
        }

        
        return(
            <div id="ChatBotChatting_Container">
            <div id="ChatBotChattingBox">   {/* 챗봇채팅창 */}
                {chatList}
            </div>     
            <div id="ChatBotInputBox_Container">    {/* 챗봇입력 컨테이너 */}
                <form id="InputForm"                //form
                    action="/"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        if(e.target.content.value!==""){
                            this.props.onSubmit(e.target.content.value);
                            document.getElementById('InputTextarea').value="";
                        }
                    }.bind(this)}
                    >
                    <div id="ChatBotInput_Box">      {/* 입력창 박스 */}
                        {/* <div>주문하기/취소하기/메뉴보기 버튼</div> 이 기능은 나중에 여유되면 구현*/}
                        <textarea id="InputTextarea"
                            name="content"
                            style={{resize:"none"}}
                            placeholder="내용을 입력하세요"
                            onKeyDown={function(e){
                                if(e.keyCode===13){
                                    if(!e.shiftKey){
                                        e.preventDefault();
                                        document.getElementById('ChatBotInput_Button').click();
                                    }
                                }
                            }}
                            ></textarea>             {/* input 입력칸 */}
                    </div>
                    <input type="submit" id="ChatBotInput_Button" value="submit"></input>
                </form>
                {/* 오늘 한 것. 1.form태그 만들기    2.엔터키 누를시/submit버튼 누를시 form태그 submit메소드 실행. */}
                {/* 다음 과제. 1.입력한 데이터 서버로 보내고(post) 받기(get) <-axios 이용. */}
            </div>
        </div>
        );
    }
}

export default ChatBotChatting;