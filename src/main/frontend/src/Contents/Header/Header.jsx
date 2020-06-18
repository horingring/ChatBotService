import React, { Component } from 'react';
import '../../css/style.css';
import logo from '../../img/YRB_logo.png';
import $ from "jquery";
// import loginImg from '../img/notebook-1280538_1920.jpg';

class Header extends Component {

  componentDidMount() {
    $('.project').mouseenter(function () {
      $(".Header_banner_dropdownMenu_Container").stop(true, true).fadeIn(500);
    });
    $('.project').mouseleave(function () {
      $(".Header_banner_dropdownMenu_Container").stop(true, true).fadeOut(500);
    });
  }

  render() {
    return (
      <nav className="Header">
        <div className="Header_innerBox">
          <a
            className="Header_logo_btn"
            href="./#"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage('main');
            }.bind(this)}
          ><img className="Header_logo" src={logo} alt="yrb 로고" /></a>
          <ul className="Header_banner">
            <li>
              <div className="Header_banner_content introduce">팀 소개</div>
            </li>
            <li>
              <div className="Header_banner_content project">프로젝트
                <div className="Header_banner_dropdownMenu_Container">
                  <div className="Header_banner_dropdownMenu">
                    <div
                      className="banner_dropdown"
                      onClick={function () {
                        this.props.onChangePage('chatBot');
                      }.bind(this)}
                    >
                      <img src={require('../../img/background_flower.jpg')} alt="chatBotImg" />
                      <p>ChatBot</p>
                    </div>
                    <div
                      className="banner_dropdown"
                      onClick={function () {
                        this.props.onChangePage('blockChain');
                      }.bind(this)}
                    >
                      <img src={require('../../img/background_tulip.jpg')} alt="blockChainImg" />
                      <p>BlockChain</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="Header_banner_content boardPage">게시판</div>
            </li>
          </ul>
          <div className="Header_loginBtn">로그인</div>
        </div>
      </nav>
    );
  }
}

export default Header;
