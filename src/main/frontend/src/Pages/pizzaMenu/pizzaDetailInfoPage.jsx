import React, { Component } from "react";
import { Link } from "react-router-dom";
import { pizza_list } from "../../Store/state";

var getPizzaDataByIdx = (idx) => {
  var pizzaData;
  for (var pizza in pizza_list) {
    if (idx === pizza_list[pizza].p_idx) {
      pizzaData = pizza_list[pizza];
      break;
    }
  }
  return pizzaData;
};

// 0911, 경호, pizzaDetailInfo_page 컴포넌트 뼈대 완성
class pizzaDetailInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPizza: {},
      currentOrder: {
        selected_size: "medium",
        selected_dough: "origin",
        selected_cheese: "mozzarella",
        price: 0,
      },
      total_price: 0,
    };
    this.getPrice_sum = this.getPrice_sum.bind(this);
    this.getPizza_size_price = this.getPizza_size_price.bind(this);
    this.getDough_price = this.getDough_price.bind(this);
    this.getCheese_price = this.getCheese_price.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");

    var currentPizza = getPizzaDataByIdx(Number(this.props.match.params.p_idx));
    this.setState({
      currentPizza,
      currentOrder: {
        ...this.state.currentOrder,
        price: currentPizza.p_price.p_M_price,
      },
    });
  }

  //test1
  // 210319, props변경(본 파일 내 Link 태그로 인한)시
  // constructor 재실행 or 완전 리렌더링 시도
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      var newCurrentPizza = getPizzaDataByIdx(
        Number(this.props.match.params.p_idx)
      );

      this.setState({
        currentPizza: newCurrentPizza,
        currentOrder: {
          ...this.state.currentOrder,
          price: newCurrentPizza.p_price.p_M_price,
        },
      });
    }
  }
  //test1

  //0924, 경호, 옵션 선택에 따른 price_sum 변경 완료!
  /*
    210319, 경호, getPrice_sum(state)
    : state/prevState 등 state를 매개변수로 한,
    옵션 선택에 따라 총 금액을 계산하는 함수
  */
  getPizza_size_price(state) {
    var pizza_size_price = 0;
    if (state.currentOrder.selected_size === "medium") {
      pizza_size_price = state.currentPizza.p_price.p_M_price;
      return pizza_size_price;
    } else if (state.currentOrder.selected_size === "large") {
      pizza_size_price = state.currentPizza.p_price.p_L_price;
      return pizza_size_price;
    }
  }

  getDough_price(state) {
    var dough_price = 0;
    if (state.currentOrder.selected_dough === "origin") {
      return dough_price;
    } else if (state.currentOrder.selected_dough === "thin") {
      return dough_price + 1000;
    } else if (state.currentOrder.selected_dough === "napoli") {
      return dough_price + 1500;
    }
  }

  getCheese_price(state) {
    var cheese_price = 0;
    if (state.currentOrder.selected_cheese === "mozzarella") {
      return cheese_price;
    } else if (state.currentOrder.selected_cheese === "cheddar") {
      return cheese_price + 500;
    } else if (state.currentOrder.selected_cheese === "gorgonzola") {
      return cheese_price + 1000;
    }
  }

  getPrice_sum(state) {
    var price_sum =
      this.getPizza_size_price(state) +
      this.getDough_price(state) +
      this.getCheese_price(state);
    return price_sum;
  }

  // test1
  getOtherPizzaLink(exceptIdx) {
    var otherPizzaLink_list = [];
    var i = 0;

    for (var pizzaName in pizza_list) {
      var pizza = pizza_list[pizzaName];
      if (pizza.p_idx === this.state.currentPizza.p_idx) {
        continue;
      }
      otherPizzaLink_list.push(
        <Link
          to={`/pizzaDetailInfoPage/${pizza.p_idx}`}
          className="otherPizza-Link"
          key={i}
        >
          <div>
            <p>{pizza.p_name}</p>
            <img
              src={pizza.p_img}
              alt={pizza.p_name}
              style={{ width: "50px", height: "auto" }}
            />
          </div>
        </Link>
      );
      i += 1;
    }

    return otherPizzaLink_list;
  }
  // test1

  render() {
    console.log("pizzaDetailInfoPage.jsx 렌더링됨");
    var currentPizza = this.state.currentPizza;

    return (
      <div className="pizzaDetailInfoPage Body-Container">
        <div className="pizzaOutlineNOrder-box">
          <div className="pizzaOutline-box">
            <img src={currentPizza.p_img} alt={currentPizza.p_name} />
            <div className="otherPizzaLink-box">
              {/* test1 */}
              {this.getOtherPizzaLink(this.state.currentPizza.p_idx)}
              {/* test1 */}
            </div>
          </div>
          <div className="pizzaOrder-box">
            <div className="pizzaOrder_form-box">
              <h4>{currentPizza.p_name}</h4>
              <form action="/" className="pizzaOrder_form">
                <label htmlFor="p_size">사이즈 : </label>
                <select
                  name="p_size"
                  id="p_size"
                  value={this.state.currentOrder.selected_size}
                  onChange={function (e) {
                    /*
                      210319, 경호
                      : 선택한 옵션, 그에 따른 총 금액을 
                      state에 적용하는 로직 
                    */
                    var { currentOrder } = this.state;
                    // (1) 선택한 옵션 state에 적용
                    this.setState({
                      currentOrder: {
                        ...currentOrder,
                        selected_size: e.target.value,
                      },
                    });
                    // (2) 변경된 옵션 state를 받아
                    // 총 금액 계산하여 다시 state에 적용
                    this.setState((prevState) => {
                      var _price = this.getPrice_sum(prevState);
                      var { currentOrder } = prevState;
                      return {
                        currentOrder: {
                          ...currentOrder,
                          price: _price,
                        },
                      };
                    });
                  }.bind(this)}
                >
                  <option value="medium">{`M (미디엄, ${
                    Object.keys(currentPizza).length !== 0
                      ? currentPizza.p_price.p_M_price
                      : ""
                  } 원)`}</option>
                  <option value="large">{`L (라지, ${
                    Object.keys(currentPizza).length !== 0
                      ? currentPizza.p_price.p_L_price
                      : ""
                  } 원)`}</option>
                </select>
                <label htmlFor="p_dough">도우 : </label>
                <select
                  name="p_dough"
                  id="p_dough"
                  value={this.state.currentOrder.selected_dough}
                  onChange={function (e) {
                    var { currentOrder } = this.state;
                    this.setState({
                      currentOrder: {
                        ...currentOrder,
                        selected_dough: e.target.value,
                      },
                    });
                    this.setState((prevState) => {
                      var _price = this.getPrice_sum(prevState);
                      var { currentOrder } = prevState;
                      return {
                        currentOrder: {
                          ...currentOrder,
                          price: _price,
                        },
                      };
                    });
                  }.bind(this)}
                >
                  <option value="origin">오리지널 도우 (기본)</option>
                  <option value="thin">씬 도우 (+1000원)</option>
                  <option value="napoli">나폴리 도우 (+1500원)</option>
                </select>
                <label htmlFor="p_cheese">치즈 : </label>
                <select
                  name="p_cheese"
                  id="p_cheese"
                  value={this.state.currentOrder.selected_cheese}
                  onChange={function (e) {
                    var { currentOrder } = this.state;
                    this.setState({
                      currentOrder: {
                        ...currentOrder,
                        selected_cheese: e.target.value,
                      },
                    });
                    this.setState((prevState) => {
                      var _price = this.getPrice_sum(prevState);
                      var { currentOrder } = prevState;
                      return {
                        currentOrder: {
                          ...currentOrder,
                          price: _price,
                        },
                      };
                    });
                  }.bind(this)}
                >
                  <option value="mozzarella">모짜렐라 (기본)</option>
                  <option value="cheddar">체다 (+500원)</option>
                  <option value="gorgonzola">고르곤졸라 (+1000원)</option>
                </select>
              </form>
              <span className="pizzaOrder_price">{`${this.state.currentOrder.price} 원`}</span>
              <div className="button-box">
                <Link to="/basketList_page">
                  <div className="button pizzaOrder_shopBasket-btn">
                    장바구니
                  </div>
                </Link>
                <Link
                  to={function () {
                    var { currentOrder } = this.state;
                    return `/order_page/${currentPizza.p_idx}/${currentOrder.selected_size}/${currentOrder.selected_dough}/${currentOrder.selected_cheese}`;
                  }.bind(this)}
                >
                  <div className="button pizzaOrder_Immediate-btn">
                    즉시주문
                  </div>
                </Link>
                {/* <Link
                  to={function () {
                    var { currentOrder } = this.state;
                    return `/order_page2/${currentPizza.p_idx}/${currentOrder.selected_size}/${currentOrder.selected_dough}/${currentOrder.selected_cheese}`;
                  }.bind(this)}
                >
                  <div className="button pizzaOrder_Immediate-btn">
                    즉시주문2
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pizzaDetailInfoPage;
