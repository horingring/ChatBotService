import React from 'react';
import {Link} from 'react-router-dom';
import bulb from "../img/lightbulb.jpg";

const ChatBotIntro= () => {
    return (
        <div id="ChatBotIntroPage">
            <div className="IntroImg xyCenter" id="IntroImg_ChatBotIntro">
                <div className="xyCenter">
                    <h1>ChatBot Intro</h1>
                    <p>챗봇 인트로 페이지입니다.</p>
                </div>
            </div>
            <article className="Article_Container">
                <h2>
                    ChatBotIntro 
                </h2>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <p>안녕</p>
                <Link to="/ChatBotDemo">챗봇 데모</Link>
            </article>
        </div>
    );
};

export default ChatBotIntro;