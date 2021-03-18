import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../../img/pizza/originalPizza.jpg";

class orderComplete_page extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");
  }

  render() {
    return (
      <div className="orderComplete_page Body-Container">
        <h3 className="article_title">주문완료</h3>
        <article>
          <p>주문이 완료되었습니다!</p>
          <h4>주문상세</h4>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>주문내역</th>
                <th>금액</th>
              </tr>
              <tr>
                <td>
                  <img src={originalPizza} alt="오리지널 피자" />
                </td>
                <td>오리지널 피자</td>
                <td>21,000원</td>
              </tr>
            </tbody>
          </table>

          <div className="totalPrice-container">
            <div className="pizzaPrice-box price-boxes">
              <span className="pizzaPrice-label">상품금액</span>
              <span className="pizzaPrice">
                <strong>21,000</strong>&nbsp;원
              </span>
            </div>
            <div>+</div>
            <div className="deliverPrice-box price-boxes">
              <span className="deliverPrice-label">배송비</span>
              <span className="deliverPrice">
                <strong>3,000</strong>&nbsp;원
              </span>
            </div>
            <div>=</div>
            <div className="totalPrice-box price-boxes">
              <span className="totalPrice-label">합계</span>
              <span className="totalPrice">
                <strong>24,000</strong>&nbsp;원
              </span>
            </div>
          </div>

          <div className="button_box">
            <Link to="/">
              <div className="button">홈으로</div>
            </Link>
            <div className="button">주문내역</div>
          </div>
        </article>
      </div>
    );
  }
}

export default orderComplete_page;
