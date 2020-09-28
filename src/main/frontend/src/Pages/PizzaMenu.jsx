import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../img/pizza.jpg";
import originPizza from "../img/pizza2.jpg";

class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //피자정보 리스트
      pizza_list: [
        {
          p_idx: 1,
          p_name: "Original Pizza",
          p_price: { p_L_price: 26000, p_M_price: 21000 },
          p_img: originPizza,
        },
        {
          p_idx: 2,
          p_name: "Vegetable Pizza",
          p_price: { p_L_price: 28000, p_M_price: 23000 },
          p_img: originalPizza,
        },
        {
          p_idx: 3,
          p_name: "Combination Pizza",
          p_price: { p_L_price: 30000, p_M_price: 25000 },
          p_img: originPizza,
        },
        {
          p_idx: 4,
          p_name: "Pepperoni Pizza",
          p_price: { p_L_price: 29000, p_M_price: 24000 },
          p_img: originalPizza,
        },
        {
          p_idx: 5,
          p_name: "Bulgogi Pizza",
          p_price: { p_L_price: 31000, p_M_price: 26000 },
          p_img: originPizza,
        },
      ],
    };
  }
  render() {
    var pizza_list_data = this.state.pizza_list;
    var pizza_list = (n) => {
      return (
        <Link
          to={`/pizzaDetailInfo_page/${pizza_list_data[n].p_idx}`}
          className="pizzaMenu__menu__link"
        >
          <div className="pizzaMenu__menu">
            <div className="pizzaMenu__img__wrapper">
              <img
                className="pizzaMenu__img"
                src={pizza_list_data[n].p_img}
                alt={pizza_list_data[n].p_name}
              />
            </div>
            <div className="pizzaMenu__pizzaName__box">
              <span className="pizzaMenu__pizzaName">
                {pizza_list_data[n].p_name}
              </span>
              <div className="pizzaMenu__sizeNprice__box">
                <div className="pizzaMenu__sizeNprice">
                  <span className="size__icon">M&nbsp;</span>
                  <span className="pizzaPrice">
                    {pizza_list_data[n].p_price.p_M_price}
                  </span>
                </div>
                <div className="pizzaMenu__sizeNprice">
                  <span className="size__icon">L&nbsp;</span>
                  <span className="pizzaPrice">
                    {pizza_list_data[n].p_price.p_L_price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    };

    return (
      <div className="pizzaMenu__page">
        <div className="IntroImg xyCenter introImg_pizzaMenu">
          <div className="xyCenter">
            <h1>Pizza Menu</h1>
            <p>피자 메뉴 페이지입니다.</p>
          </div>
        </div>
        <article className="Article_Container">
          <h2 className="ContentTitle article_title">Pizza Menu</h2>
          <div id="pizzaMenu__main">
            <div className="pizzaMenu__header">
              <h3 className="pizzaMenu__pizzaGrade">Classic</h3>
              <div className="pizzaMenu__quickOrder">빠른 주문</div>
            </div>
            <div className="pizzaMenu__list">
              <div className="pizzaMenu__row">
                {pizza_list(0)}
                {pizza_list(1)}
                {pizza_list(2)}
              </div>
              <div className="pizzaMenu__row">
                {pizza_list(3)}
                {pizza_list(4)}
                <Link
                  to="/"
                  onClick={function (e) {
                    e.preventDefault();
                  }}
                  className="pizzaMenu__menu__link"
                >
                  <div className="pizzaMenu__menu">
                    <div className="pizzaMenu__img__wrapper"></div>
                    <div className="pizzaMenu__pizzaName"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default PizzaMenu;
