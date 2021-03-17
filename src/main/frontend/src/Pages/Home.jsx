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
  }

  // props변경 x일 시 -> 리렌더링 x
  shouldComponentUpdate(newProps) {
    if (this.props.data === newProps.data) {
      return false;
    } else {
      return true;
    }
  }

  //0917, 경호, 이 부분 첫번째 setTimeout()은 작동하는데 두 번째 setTimeout은 동작x. 수정 필요.
  //최초 렌더링 되었을 때 fadeIn 되어야 함
  componentDidMount() {
    // scroll to Top
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");

    // comment fadeIn
    setTimeout(function () {
      $(".slider_comment1-1").fadeIn();
    }, 1000);
    setTimeout(function () {
      $(".slider_comment1-2").fadeIn();
    }, 2000);
  }

  componentDidUpdate() {
    console.log("in CDUpdate");
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
      autoplay: true,
      afterChange: (index) => {
        if (index === 0) {
          /* in slider_Wrapper 1 */
          // slider_Wrapper 1
          setTimeout(function () {
            $(".slider_comment1-1").stop(true, true).fadeIn();
          }, 500);
          setTimeout(function () {
            $(".slider_comment1-2").stop(true, true).fadeIn();
          }, 1500);

          // slider_Wrapper 2
          $(".slider_comment2-1").hide();
          $(".slider_comment2-2").hide();
        } else if (index === 1) {
          /* in slider_Wrapper 2 */
          // slider_Wrapper 1
          $(".slider_comment1-1").hide();
          $(".slider_comment1-2").hide();

          // slider_Wrapper 2
          setTimeout(function () {
            $(".slider_comment2-1").stop(true, true).fadeIn();
          }, 500);
          setTimeout(function () {
            $(".slider_comment2-2").stop(true, true).fadeIn();
          }, 1500);
        }
      },
      autoplaySpeed: 5000,
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
      </div>
    );
  }
}

export default Home;
