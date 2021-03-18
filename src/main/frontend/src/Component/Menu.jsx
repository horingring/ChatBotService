import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/YRB_logo.png";
import lightbulbLogo from "../img/lightbulb_logo.jpg";
import networkLogo from "../img/network_logo.jpg";
import { Button, Nav, Navbar, Form } from "react-bootstrap";
import CreateMember from "../Pages/CreateMember";
import $ from "jquery";

class Menu extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#Menu_ChatBotService").hover(
        function () {
          $("#dropDown_ChatBotService").stop(true, true).fadeIn();
        }, //hover시 dropdown 나타남
        function () {
          $("#dropDown_ChatBotService").stop(true, true).fadeOut();
        }
      ); //hover 해제 시 dropdown 사라짐
    });
  }

  render() {
    return (
      <div id="Header">
        <Navbar
          className="Header_Navbar"
          style={{
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-around",
          }}
          variant="dark"
        >
          <div className="mask_black"></div>
          <div className="navBar_left">
            <Link to="/">
              <img className="Header_logo" src={logo} alt="yrb 로고" />
            </Link>
            <div className="Menu_Container">
              <Link to="/PizzaMenuPage" className="ReactRouterDom_Link">
                <div className="Menu_MemberIntro Menu">
                  Menu&nbsp;&amp;&nbsp;Order
                </div>
              </Link>
              <div className="ReactRouterDom_Link">
                <div className="Menu" id="Menu_ChatBotService">
                  ChatBot Service
                  <div
                    className="dropDownMenu_Wrapper"
                    id="dropDown_ChatBotService"
                  >
                    <ul className="dropDownMenu">
                      <li>
                        <Link
                          to="/ChatBotIntro"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <div className="mask_black"></div>
                          <div className="dropDown_div">
                            <div>
                              <img
                                src={lightbulbLogo}
                                alt="챗봇 인트로 로고"
                              ></img>
                            </div>
                            <div style={{ height: "30px", marginTop: "4px" }}>
                              <span style={{ fontSize: "20px" }}>
                                챗봇 인트로
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ChatBotDemo"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <div className="mask_black"></div>
                          <div className="dropDown_div">
                            <div>
                              <img
                                src={networkLogo}
                                alt="챗봇 인트로 로고"
                              ></img>
                            </div>
                            <div style={{ height: "30px", marginTop: "4px" }}>
                              <span style={{ fontSize: "20px" }}>
                                챗봇 데모
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="/MemberIntro" className="ReactRouterDom_Link">
                <div className="Menu_MemberIntro Menu">Member Introduction</div>
              </Link>
            </div>
          </div>

          <div className="navBar_right">
            <Link to="/CreateMember">
              <div className="header_login_btn Menu">회원가입</div>
            </Link>
            <Link to="/MyPage">
              <div className="header_myInfo_btn Menu">나의정보</div>
            </Link>
            <Link to="/basketList_page">
              <div className="header_basketList_btn Menu">장바구니</div>
            </Link>
            {/* <Link to="/device">
              <div className="header_basketList_btn Menu">axios연습</div>
            </Link> */}
            {/* <a href="http://192.168.43.211:8080/">
              <Button>GoTo8080</Button>
            </a> */}
          </div>
          {/* <Form inline>
                        <Button variant="outline-info" onClick={() => setModalShow(true)} style={{margin: "10px"}}><Link to="/CreateMember">로그인</Link></Button>
                        <Link to ="/MyPage"><Button variant="outline-info">나의 정보</Button></Link>
                    </Form> */}
        </Navbar>
        {/* <CreateMember
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
      </div>
    );
  }
}
export default Menu;
