import React from 'react';
import {Link} from 'react-router-dom';

const ChatBotIntro= () => {
    return (
        <div>
            <h2>
                ChatBotIntro 
            </h2>
            <Link to="/ChatBotDemo">챗봇 데모</Link>
        </div>
    );
};

export default ChatBotIntro;