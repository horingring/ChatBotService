import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div id="Footer" className="flexRow">
            <div className="FooterDiv">
                <p>Team Name : JLN (주형진, 이경호, 남상범)</p>
                <p>ddress : Github - <a>https://github.com/MCJoo/ChatBotService</a></p>
                <p>Inquiry : (e-mail address(link))</p>
            </div>
            <div className="FooterDiv">
                <p>즉시이동</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ChatBotDemo">ChatBotDemo</Link></li>
                    <li><Link to="/ChatBotIntro">ChatBotIntro</Link></li>
                    <li><Link to="/MemberIntro">MemberIntro</Link></li>
                    <li><Link to="/MyPage">MyPage</Link></li>
                    <li><Link to="/CreateMember">CreateMember</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;