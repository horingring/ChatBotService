import React, {Component} from 'react';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pizza from '../img/pizza.jpg';
class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

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
            autoplaySpeed: 4000
          };
        return (
            <div id="HomePage">
                <Slider {...settings}>
                    <div className="slider_Wrapper">
                        <div className="slider_Img" id="slider_Img1">
                            <div className="maskForImg mask_black"></div>
                        </div>
                    </div>
                    <div className="slider_Img">
                        <div className="slider_Img" id="slider_Img2"></div>
                    </div>
                </Slider>
                {/* <p>{this.state.message} </p> */}
            </div>

        )
    }
}

export default Home;