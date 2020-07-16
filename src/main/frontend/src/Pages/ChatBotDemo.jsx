import React from 'react';
import ChatBotChatting from './ChatBotDemo/ChatBotChatting';
import ChatBotExtraBox from './ChatBotDemo/ChatBotExtraBox';

const ChatBotDemo = () => {
    return (
        <div id="ChatBotDemoPage">
            <h2 className="ContentTitle">
                ChatBotDemo
            </h2>
            <div id="ChatBotDemoMain">
                <ChatBotChatting></ChatBotChatting>
                <ChatBotExtraBox></ChatBotExtraBox>
            </div>
        </div>
    );
};

export default ChatBotDemo;