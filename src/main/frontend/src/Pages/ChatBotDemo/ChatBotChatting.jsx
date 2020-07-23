import React,{Component} from 'react';
import chatBotPic from '../../img/YRB_logo.png';

class ChatBotChatting extends Component{

    render(){
        //0722, 경호, 채팅 말풍선 구현(state에 올려져 있는 채팅목록에서 데이터 받아옴), 채팅 피아식별 기능 구현
        var chatList = [];
        var chatData = this.props.chatData;
        var userData = this.props.userData;
        for(var i=0; i<chatData.length; i++){
            if(chatData[i].m_idx!==userData.m_idx){
                chatList.push(
                    <div 
                      className="chatNextBox"
                      key={chatData[i].chatNum}
                    >
                        <div className="chatBoxContainerForOtherUser">
                            <div className="chatProfilePicture">
                                <img src={chatBotPic} alt="챗봇 이미지"></img>
                            </div>
                            <div className="chatNameAndContent_Wrapper">
                                <div className="chatName">
                                    {chatData[i].user}
                                </div>
                                <div className="chatContent">
                                    {chatData[i].content}
                                </div>
                            </div>
                        </div>
                    </div>
                );    
            }else{
                chatList.push(
                    <div 
                      className="chatNextBox chatContent_right"
                      key={chatData[i].chatNum}
                    >
                        <div className="chatContent">
                            {chatData[i].content}
                        </div>
                    </div>
                );    
            }
            
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