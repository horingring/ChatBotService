import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza from "../img/pizza.jpg";
import $ from "jquery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideMode: 1,
    };
  }

  shouldComponentUpdate(newProps) {
    if (this.props.data === newProps.data) {
      return false;
    } else {
      return true;
    }
  }
  // getRelativeLeft = (element) => {
  //   var relativeLeft = element.getBoundingClientRect().left;
  //   return relativeLeft;
  // };

  //0917, 경호, 이 부분 첫번째 setTimeout()은 작동하는데 두 번째 setTimeout은 동작x. 수정 필요.
  //최초 렌더링 되었을 때 fadeIn 되어야 함
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");
    // $(document).ready(function () {
    //   setTimeout(function () {
    //     $(".slider_comment1-1").fadeIn();
    //   }, 1000);
    //   setTimeout(function () {
    //     $(".slider_comment1-2").fadeIn();
    //   }, 2000);
    // });

    var slider_img1 = document.getElementById("slider_Img1");
    var relativeLeft = slider_img1.getBoundingClientRect().left;
    console.log("if문 이전");
    if (relativeLeft == 0) {
      console.log("if문 실행시작");
      setTimeout(function () {
        $(".slider_comment1-1").fadeIn();
      }, 1000);
      setTimeout(function () {
        $(".slider_comment1-2").fadeIn();
      }, 2000);
      console.log("if문 내부. if문 실행완료");
    }

    // this.setState({
    //   windowWidth: _windowWidth,
    // }).bind(this);
    //
    // var slider_img2 = $("#slider_Img2");
    // var slider_comment1_1 = $(".slider_comment1_1");
    // var slider_comment1_2 = $(".slider_comment1_2");
    // if (this.getRelativeLeft(slider_img1[0]) == 0) {
    //   setTimeout(function () {
    //     slider_comment1_1.fadeIn();
    //   }, 1000);
    //   setTimeout(function () {
    //     slider_comment1_2.fadeIn();
    //   }, 2000);
    // }

    // if(this.getRelativeLeft(slider_img2)==0){
    //   setTimeout(function(){
    //     slider_comment1_2.fadeIn();
    //   },2000)
    // }
  }

  //컴포넌트가 변경되었을 때 fadeIn 되어야 함
  componentDidUpdate() {
    var _windowWidth = $(window).width();
    var slider_img1 = document.getElementById("slider_Img1");
    var relativeLeft = slider_img1.getBoundingClientRect().left;
    var relativeRight = slider_img1.getBoundingClientRect().right;
    //fadeIn된 div 다시 사라지게하기
    if (relativeRight <= 0 || relativeLeft > _windowWidth) {
      $(".slider_comment1-1").css("display", "none");
      $(".slider_comment1-2").css("display", "none");
    }

    //다시 fadeIn
    if (relativeLeft == 0) {
      console.log("if문 다시 실행시작");
      setTimeout(function () {
        $(".slider_comment1-1").fadeIn();
      }, 1000);
      setTimeout(function () {
        $(".slider_comment1-2").fadeIn();
      }, 2000);
      console.log("if문 내부. if문 다시 실행완료");
    }
    // $(document).ready(function () {
    //   setTimeout(function () {
    //     $(".slider_comment1-1").fadeIn();
    //   }, 1000);
    //   setTimeout(function () {
    //     $(".slider_comment1-2").fadeIn();
    //   }, 2000);
    // });
  }

  // //API 가져오는 함수
  // getApi = () => {
  //     axios.get("http://localhost:8080/api/login").then(res => {
  //         console.log(res);
  //         this.setState({message: res.data.message})
  //     }).catch(res => console.log(res))
  // }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      //   autoplaySpeed: 4000,
    };
    return (
      <div id="HomePage">
        <Slider {...settings}>
          <div className="slider_Wrapper">
            <div className="slider_comment slider_comment1-1">
              <strong>도우&nbsp;,&nbsp;</strong>
              <strong>치즈</strong>를
            </div>
            <div className="slider_comment slider_comment1-2">
              <strong>내가 원하는대로!</strong>
            </div>
            <div className="slider_Img" id="slider_Img1">
              <div className="maskForImg mask_black"></div>
            </div>
          </div>
          <div className="slider_Wrapper">
            <div className="slider_comment slider_comment2-1">
              <strong>챗봇</strong>으로
            </div>
            <div className="slider_comment slider_comment2-2">
              <strong>빠르고</strong>&nbsp;&nbsp;
              <strong>,</strong>
              <strong>간단하게</strong> 주문하세요
            </div>
            <div className="slider_Img">
              <div className="slider_Img" id="slider_Img2"></div>
            </div>
          </div>
        </Slider>
        {/* <p>{this.state.message} </p> */}
      </div>
    );
  }
}

export default Home;
