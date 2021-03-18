import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../../img/pizza/originalPizza.jpg";
import vegetablePizza from "../../img/pizza/vegetablePizza.jpg";
import combinationPizza from "../../img/pizza/combinationPizza.jpg";
import pepperoniPizza from "../../img/pizza/pepperoniPizza.jpg";
import bulgogiPizza from "../../img/pizza/bulgogiPizza.jpg";

class order_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //피자정보 리스트
      //0922, 경호, 여기서 state는, Router의 props 전달로 가져온 p_idx를 통해, (axios를 이용하여) 서버로부터 가져온 데이터라고 가정한다.
      //이때 원래대로라면, state에는 해당 p_idx에 일치하는 list만 가져오게 될 것이다. 여기서는 편의상 모든 pizza_list를 가져왔다.
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
      max_order_idx: 1,
      //원래 order_info는 리스트(list)여야 함. 왜냐하면 장바구니에 상품이 여러 가지 있을 수 있기때문. 하지만 편의상 하나의 객체로 지정함.
      order_info: [
        {
          order_idx: 0,
          p_name: "",
          p_img: originalPizza,
          p_size: "medium",
          p_dough: "origin",
          p_cheese: "mozzarella",
          p_price_sum: 0,
        },
      ],
      p_total_price: 0,
      deliver_price: 0,
    };
    //bind된 함수 간단하게 바꿔주기
    this.getPizza_detailInfoByIdx = this.getPizza_detailInfoByIdx.bind(this);
    this.getPrice_sum = this.getPrice_sum.bind(this);
    this.getPizza_size_price = this.getPizza_size_price.bind(this);
    this.getDough_price = this.getDough_price.bind(this);
    this.getCheese_price = this.getCheese_price.bind(this);
    this.getDeliver_price = this.getDeliver_price.bind(this);
    this.getFinal_price = this.getFinal_price.bind(this);
    this.getTable_data = this.getTable_data.bind(this);
    //state를 넘겨받은 props로 재구성
    //이 부분은 반복되어야 함.(장바구니에 여러 상품이 있을 경우... m_idx에 따라 장바구니의 상품들을 다 state상에 올려야 함)

    //state 초기화(넘겨받은 props 통해서)
    for (var i = 0; i < this.state.order_info.length; i++) {
      this.state.order_info[i].order_idx = this.state.max_order_idx;

      var pizza_detailInfo = this.getPizza_detailInfoByIdx();

      var _p_name = pizza_detailInfo.p_name;
      var _p_img = pizza_detailInfo.p_img;
      this.state.order_info[i].p_name = _p_name;
      this.state.order_info[i].p_img = _p_img;

      var { params } = this.props.match;
      this.state.order_info.p_size = params.p_size;
      this.state.order_info[i].p_dough = params.p_dough;
      this.state.order_info[i].p_cheese = params.p_cheese;

      var _p_price_sum = this.getPrice_sum(i);
      this.state.order_info[i].p_price_sum = _p_price_sum;

      this.state.max_order_idx += 1;
    }

    //state의 p_total_price 초기화
    var _p_total_price = 0;
    for (var i = 0; i < this.state.order_info.length; i++) {
      _p_total_price += this.state.order_info[i].p_price_sum;
    }
    this.state.p_total_price = _p_total_price;

    //deliver_price state 업로드
    this.state.deliver_price = this.getDeliver_price(this.state.p_total_price);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");
  }

  getPizza_detailInfoByIdx() {
    var pizza_list_data = this.state.pizza_list;
    var pizza_detailInfo;
    for (var i = 0; i < pizza_list_data.length; i++) {
      if (this.props.match.params.p_idx === `${pizza_list_data[i].p_idx}`) {
        pizza_detailInfo = pizza_list_data[i];
        console.log(pizza_detailInfo);
        break;
      }
    }
    return pizza_detailInfo;
  }

  getPizza_size_price(i) {
    var pizza_size_price = 0;
    if (this.state.order_info[i].p_size === "medium") {
      pizza_size_price = this.getPizza_detailInfoByIdx().p_price.p_M_price;
      return pizza_size_price;
    } else if (this.state.order_info[i].p_size === "large") {
      pizza_size_price = this.getPizza_detailInfoByIdx().p_price.p_L_price;
      return pizza_size_price;
    }
  }

  getDough_price(i) {
    var dough_price = 0;
    if (this.state.order_info[i].p_dough === "origin") {
      return dough_price;
    } else if (this.state.order_info[i].p_dough === "thin") {
      return dough_price + 1000;
    } else if (this.state.order_info[i].p_dough === "napoli") {
      return dough_price + 1500;
    }
  }

  getCheese_price(i) {
    var cheese_price = 0;
    if (this.state.order_info[i].p_cheese === "mozzarella") {
      return cheese_price;
    } else if (this.state.order_info[i].p_cheese === "cheddar") {
      return cheese_price + 500;
    } else if (this.state.order_info[i].p_cheese === "gorgonzola") {
      return cheese_price + 1000;
    }
  }

  getPrice_sum(i) {
    var price_sum =
      this.getPizza_size_price(i) +
      this.getDough_price(i) +
      this.getCheese_price(i);
    return price_sum;
  }

  getDeliver_price(price) {
    var _deliver_price = price >= 30000 ? 0 : 3000;
    return _deliver_price;
  }

  getFinal_price(order_info) {
    var final_price;
    final_price = this.state.p_total_price + this.state.deliver_price;
    return final_price;
  }

  getTable_data() {
    var table_data = [];
    for (var i = 0; i < this.state.order_info.length; i++) {
      table_data.push(
        <tr>
          <td>
            <img
              src={this.state.order_info[i].p_img}
              alt={this.state.order_info[i].p_name}
            />
          </td>
          <td>{this.state.order_info[i].p_name}</td>
          <td>{`${this.state.order_info[i].p_price_sum} 원`}</td>
        </tr>
      );
    }
    return table_data;
  }

  render() {
    return (
      <div className="order_page Body-Container">
        <h3 className="article_title">주문하기/결제</h3>
        <article>
          <h5>주문정보</h5>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>주문내역</th>
                <th>금액</th>
              </tr>
              {this.getTable_data()}
            </tbody>
          </table>
          <form
            className="order_form"
            action="/"
            onSubmit={function (e) {
              e.preventDefault();
            }}
          >
            <h5>주문자 정보</h5>
            <table>
              <tbody>
                <tr>
                  <th>주문자 이름</th>
                  <td>
                    <input name="order_name" type="text" />
                  </td>
                </tr>
                <tr>
                  <th>주문자 주소</th>
                  <td>
                    <input
                      name="order_address"
                      type="text"
                      className="input_address"
                    />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td>
                    <input
                      name="order_phoneNumber"
                      type="text"
                      placeholder="-를 제외한 숫자 입력"
                    />
                  </td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>
                    <input name="order_eMail" type="text" />
                  </td>
                </tr>
              </tbody>
            </table>

            <h5>배송정보</h5>
            <table>
              <tbody>
                <tr>
                  <th>수령인 이름</th>
                  <td>
                    <input name="reciever_name" type="text" />
                  </td>
                </tr>
                <tr>
                  <th>배송지 주소</th>
                  <td>
                    <input
                      name="reciever_address"
                      type="text"
                      className="input_address"
                    />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td>
                    <input
                      name="reciever_phoneNumber"
                      type="text"
                      placeholder="-를 제외한 숫자 입력"
                    />
                  </td>
                </tr>
                <tr>
                  <th>남기실 말씀</th>
                  <td>
                    <input name="add-comment" type="text" />
                  </td>
                </tr>
              </tbody>
            </table>

            <h5>결제정보</h5>
            <table>
              <tbody>
                <tr>
                  <th>상품 합계 금액</th>
                  <td>{`${this.state.p_total_price} 원`}</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>
                    {`${this.state.deliver_price} 원 `}
                    <span>(30,000원 이상 주문 시 배송비가 무료입니다.)</span>
                  </td>
                </tr>
                <tr>
                  <th>최종 결제 금액</th>
                  {/* ↓ 데이터 넘겨받아야 함 */}
                  <td>{`${this.getFinal_price()} 원`}</td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th>결제 수단</th>
                  <td>신용카드</td>
                </tr>
              </tbody>
            </table>

            {/* <input type="submit" value="결제하기"/> */}
            <Link to="/orderComplete_page">
              <div>결제하기</div>
            </Link>
          </form>
        </article>
      </div>
    );
  }
}

export default order_page;
