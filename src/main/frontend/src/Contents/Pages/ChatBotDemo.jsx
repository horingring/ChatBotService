import React,{Component} from 'react';

class ChatBotDemo extends Component{
    constructor(props){
        super(props);
        this.max_index=0;
        this.state = {
            data : []
        }
    }

    getReadData(){
        var lists=[];
        for(var i=0; i<this.state.data.length; i++){
            lists.push(
            <div className="speechBubble_Container">
                <div className="speechBubble">{this.state.data[i].content}</div>
            </div>    
            );
        }
        return lists;
    }

    //엔터, shift+엔터 -> submit, 줄바꿈
    onEnterPress(e){
        if(e.keyCode===13 && e.shiftKey===false){
            e.preventDefault();
            // document.getElementsByClassName('ChatBot_InputBox_Container').item(0).submit();
            // 위처럼 form태그를 submit 하면, 그냥 리로드가 되어버리길래,
            // 아래처럼 submit 버튼을 click 하는 것으로 바꾸었다!
            document.getElementsByClassName('ChatBot_SubmitBtn').item(0).click();
        }
    }

    // 스크롤 자동 하단 고정
    onScrollBottom(){
        var chatbotContainer = document.getElementsByClassName('ChatBot_ChattingBox_Container_Wrapper').item(0);
        chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
    }


    render(){
        
        return(
            <div className="ChatBot_Container">
                <div className="ChatBotDemo">
                    <div className="ChatBotDemo_Title">
                        <h5>ChatBot(Demo)</h5>
                    </div>
                    <div className="ChatBotDemo_Main_Container">
                        <div className="ChatBot_ChattingBox_Container_Wrapper">
                            <div className="ChatBot_ChattingBox_Container">
                                    {this.getReadData()}
                            </div>
                        </div>
                        {/* <div className="Cha`tBot_InputBox_Container">
                            <div className="ChatBot_InputBox"></div>
                            <div className="ChatBot_SubmitBtn_Box">
                                <div className="ChatBot_SubmitBtn">Submit</div>
                            </div>
                        </div> */}
                        <form
                            action="./"
                            className="ChatBot_InputBox_Container"
                            onSubmit={function(e){
                                e.preventDefault();
                                if(e.target.inputContent.value!==""){
                                    var _data;
                                    this.max_index=this.max_index+1;
                                    _data = this.state.data.concat({
                                        index : this.max_index,
                                        id : this.props.name,
                                        content : e.target.inputContent.value
                                    })
                                    this.setState({
                                        data : _data
                                    });
                                    document.getElementsByClassName('ChatBot_InputBox').item(0).value="";
                                    this.onScrollBottom();
                                }
                            }.bind(this)}
                        >
                            <textarea 
                                name="inputContent" className="ChatBot_InputBox"
                                onKeyDown={this.onEnterPress}
                                ></textarea>
                            <input type="submit" value="submit" className="ChatBot_SubmitBtn"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBotDemo;