import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../img/pizza/originalPizza.jpg";
import vegetablePizza from "../img/pizza/vegetablePizza.jpg";
import combinationPizza from "../img/pizza/combinationPizza.jpg";
import pepperoniPizza from "../img/pizza/pepperoniPizza.jpg";
import bulgogiPizza from "../img/pizza/bulgogiPizza.jpg";

class PizzaMenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //피자정보 리스트
      pizza_list: [
        {
          p_idx: 1,
          p_name: "Original Pizza",
          p_price: { p_L_price: 26000, p_M_price: 21000 },
          p_img: originalPizza,
        },
        {
          p_idx: 2,
          p_name: "Vegetable Pizza",
          p_price: { p_L_price: 28000, p_M_price: 23000 },
          p_img: vegetablePizza,
        },
        {
          p_idx: 3,
          p_name: "Combination Pizza",
          p_price: { p_L_price: 30000, p_M_price: 25000 },
          p_img: combinationPizza,
        },
        {
          p_idx: 4,
          p_name: "Pepperoni Pizza",
          p_price: { p_L_price: 29000, p_M_price: 24000 },
          p_img: pepperoniPizza,
        },
        {
          p_idx: 5,
          p_name: "Bulgogi Pizza",
          p_price: { p_L_price: 31000, p_M_price: 26000 },
          p_img: bulgogiPizza,
        },
      ],
    };
  }
  render() {
    var getPizzaLinkByIdx = (idx) => {
      var pizza_list_data = this.state.pizza_list;

      /* 210318, 경호
        idx number를 통해 해당 pizza의 정보를 가져오는 함수
        getPizzaDataByIdx는 재활용 가능.
      */
      var getPizzaDataByIdx = (idx) => {
        var pizzaData;
        for (var i = 0; i < pizza_list_data.length; i++) {
          if (idx === pizza_list_data[i].p_idx) {
            pizzaData = pizza_list_data[i];
            break;
          }
        }
        return pizzaData;
      };

      var pizzaData = getPizzaDataByIdx(idx);

      return (
        <Link
          to={`/pizzaDetailInfo_page/${pizzaData.p_idx}`}
          className="pizzaMenuPage_menu_link"
        >
          <div className="pizzaMenuPage_menu">
            <div className="pizzaMenuPage_img-wrapper">
              <img
                className="pizzaMenuPage_img"
                src={pizzaData.p_img}
                alt={pizzaData.p_name}
              />
            </div>
            <div className="pizzaMenuPage_pizzaName-box">
              <span className="pizzaMenuPage_pizzaName">
                {pizzaData.p_name}
              </span>
              <div className="pizzaMenuPage_sizeNprice-box">
                <div className="pizzaMenuPage_sizeNprice">
                  <span className="size_icon">M</span>
                  <span className="pizzaPrice">
                    {pizzaData.p_price.p_M_price}
                  </span>
                </div>
                <div className="pizzaMenuPage_sizeNprice">
                  <span className="size_icon">L</span>
                  <span className="pizzaPrice">
                    {pizzaData.p_price.p_L_price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    };

    return (
      <div className="pizzaMenuPage">
        <div className="IntroImg xyCenter introImg_pizzaMenuPage">
          <div className="xyCenter">
            <h1>Pizza Menu</h1>
            <p>피자 메뉴 페이지입니다.</p>
          </div>
        </div>
        <article className="Article-Container">
          <h2 className="ContentTitle article_title">Pizza Menu</h2>
          <div className="pizzaMenuPage_main">
            <div className="pizzaMenuPage_header">
              <h3 className="pizzaMenuPage_pizzaGrade">Classic</h3>
              <div className="pizzaMenuPage_quickOrder">빠른 주문</div>
            </div>
            <div className="pizzaMenuPage_list">
              {getPizzaLinkByIdx(1)}
              {getPizzaLinkByIdx(2)}
              {getPizzaLinkByIdx(3)}
              {getPizzaLinkByIdx(4)}
              {getPizzaLinkByIdx(5)}
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default PizzaMenuPage;
