import React from 'react';

const ChatBotChatting = () => {
    return (
        <div id="ChatBotChatting_Container">
            {/* test용 주석 */}
            <div id="forTest1">ss</div>
            <div id="forTest2">ss</div>

            <div id="forTest3">ss</div>

            <div id="forTest4">ss</div>

            <div id="forTest5">ss</div>

            <div id="forTest6">ss</div>
            {/* test용 주석(branch) */}
            <div id="test1">aa</div>
            <div id="test2">aa</div>
            <div id="test3">aa</div>
            <div id="test4">aa</div>


            <div id="ChatBotChattingBox"></div>     {/* 챗봇채팅창 */}
            <div id="ChatBotInputBox_Container">    {/* 챗봇입력 컨테이너 */}
                <form id="InputForm"                //form
                    action="/"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                    }}
                    >
                    <div id="ChatBotInput_Box">      {/* 입력창 박스 */}
                        {/* <div>주문하기/취소하기/메뉴보기 버튼</div> 이 기능은 나중에 여유되면 구현*/}
                        <textarea id="InputTextarea" 
                            style={{resize:"none"}}
                            placeholder="내용을 입력하세요"
                            onKeyDown={function(e){
                                if(e.keyCode==13){
                                    if(!e.shiftKey){
                                        e.preventDefault();
                                        alert('OK!!!!');
                                        document.getElementById('InputTextarea').value="";
                                    }
                                }
                            }}
                            ></textarea>             {/* input 입력칸 */}
                    </div>
                    <div id="ChatBotInput_Button"    //submit 버튼
                        onClick={function(){
                            //document.getElementById('InputForm').submit();
                            document.getElementById('InputTextarea').value="";
                        }}    
                    >Submit</div>
                </form>
                {/* 오늘 한 것. 1.form태그 만들기    2.엔터키 누를시/submit버튼 누를시 form태그 submit메소드 실행. */}
                {/* 다음 과제. 1.입력한 데이터 서버로 보내고(post) 받기(get) <-axios 이용. */}
            </div>
        </div>
    );
};

export default ChatBotChatting;