import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterDiv">
        <div className="footer_title xyCenter">Team Info</div>
        <table>
          <tbody>
            <tr>
              <td>Team Name</td>
              <td>JLN (주형진, 이경호, 남상범)</td>
            </tr>
            <tr>
              <td>Github Address</td>
              <td>
                <a href="https://github.com/MCJoo/ChatBotService">
                  https://github.com/MCJoo/ChatBotService
                </a>
              </td>
            </tr>
            <tr>
              <td>Inquiry</td>
              <td>dldldksl@naver.com</td>
            </tr>
          </tbody>
        </table>
        {/* <ul>
          <li>Team Name : JLN (주형진, 이경호, 남상범)</li>
          <li>
            Github Address :{" "}
            <a href="https://github.com/MCJoo/ChatBotService">
              https://github.com/MCJoo/ChatBotService
            </a>
          </li>
          <li>Inquiry : (e-mail address(link))</li>
        </ul> */}
      </div>
      <div className="FooterDiv">
        <div className="footer_title xyCenter">Immediate Link</div>
        <ul>
          <span className="spanToFlex">
            <span className="flexColumn">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/PizzaMenu">Menu&nbsp;&amp;&nbsp;Order</Link>
              </li>
              <li>
                <Link to="/ChatBotDemo">ChatBotDemo</Link>
              </li>
            </span>
            <span className="flexColumn">
              <li>
                <Link to="/ChatBotIntro">ChatBotIntro</Link>
              </li>
              <li>
                <Link to="/MemberIntro">MemberIntro</Link>
              </li>
              <li>
                <Link to="/MyPage">MyPage</Link>
              </li>
              <li>
                <Link to="/CreateMember">CreateMember</Link>
              </li>
            </span>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
