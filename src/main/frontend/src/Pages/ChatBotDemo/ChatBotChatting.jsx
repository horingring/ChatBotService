import React from 'react';

const ChatBotChatting = () => {
    return (
        <div id="ChatBotChatting_Container">
            <div id="ChatBotChattingBox"></div>  {/* 챗봇채팅창 */}
            <div id="ChatBotInputBox_Container">    {/* 챗봇입력 컨테이너 */}
                <div id="ChatBotInput_Box">      {/* 입력창 박스 */}
                    {/* <div>주문하기/취소하기/메뉴보기 버튼</div> 이 기능은 나중에 제안해보기*/}
                    <textarea id="InputTextarea" style={{resize:"none"}}></textarea>     {/* input 입력칸 */}
                </div>
                <div id="ChatBotInput_Button">Submit</div>
            </div>
        </div>
    );
};

export default ChatBotChatting;