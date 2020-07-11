import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <hr/>
            <h1>This is footer side</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ChatBotDemo">ChatBotDemo</Link></li>
                <li><Link to="/ChatBotIntro">ChatBotIntro</Link></li>
                <li><Link to="/MemberIntro">MemberIntro</Link></li>
                <p>형진</p>
                <li><Link to="/MyPage">MyPage</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Footer;