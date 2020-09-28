import React from "react";
import { Link } from "react-router-dom";
import bulb from "../img/lightbulb.jpg";

const ChatBotIntro = () => {
  return (
    <div id="ChatBotIntroPage">
      <div className="IntroImg xyCenter" id="IntroImg_ChatBotIntro">
        <div className="xyCenter">
          <h1>ChatBot Intro</h1>
          <p>챗봇 인트로 페이지입니다.</p>
          <p>챗봇의 간단한 사용예시를 확인하실 수 있습니다.</p>
        </div>
      </div>
      <article className="Article_Container">
        <div className="xyCenter">
          <div className="button_label">Go To&nbsp;→&nbsp;</div>
          <Link to="/ChatBotDemo" className="button ReactRouterDom_Link">
            챗봇 데모
          </Link>
        </div>
        <br />
        <br />
        <h2 className="article_title">ChatBotIntro</h2>
        <br />
        <h4>챗봇이란?</h4>
        <p>웹페이지 전용 피자주문 도우미입니다.</p>
        <p>채팅을 통해 빠르고 편리하게 정보를 확인하고 주문해보세요!</p>
        <br />
        <h4>지원기능</h4>
        <p>피자 주문, 피자메뉴 확인, 피자메뉴-주문 연동</p>
        <br />
        <h4>챗봇으로 주문하는 방법</h4>
        <h5>목차</h5>
        <ul>
          <li>회원 주문</li>
          <li>비회원 주문</li>
          <li>주문 취소</li>
        </ul>
        <br></br>
        <br></br>
        <h4>1. 회원 주문</h4>
        <p>회원 주문 절차</p>
        <br></br>
        <h4>2. 비회원 주문</h4>
        <p>비회원 주문 절차</p>
        <br></br>
        <h4>3. 주문 취소</h4>
        <p>주문취소 절차</p>
        <Link to="/ChatBotDemo">챗봇 데모</Link>
      </article>
    </div>
  );
};

export default ChatBotIntro;
