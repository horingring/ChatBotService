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
    var props = this.props;
    this.state = {
      currentPizza: getPizzaDataByIdx(Number(props.match.params.p_idx)),
      currentOrder: {
        selected_size: "medium",
        selected_dough: "origin",
        selected_cheese: "mozzarella",
        price_sum: 0,
      },
    };
    this.getPrice_sum = this.getPrice_sum.bind(this);
    this.getPizza_size_price = this.getPizza_size_price.bind(this);
    this.getDough_price = this.getDough_price.bind(this);
    this.getCheese_price = this.getCheese_price.bind(this);
    var _price_sum = this.getPrice_sum();
    this.state.currentOrder.price_sum = _price_sum;
    // setState({ price_sum: _price_sum })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("스크롤탑 실행됨");
  }

  //0924, 경호, 옵션 선택에 따른 price_sum 변경 완료!
  getPizza_size_price() {
    var pizza_size_price = 0;
    if (this.state.currentOrder.selected_size === "medium") {
      pizza_size_price = this.state.currentPizza.p_price.p_M_price;
      return pizza_size_price;
    } else if (this.state.currentOrder.selected_size === "large") {
      pizza_size_price = this.state.currentPizza.p_price.p_L_price;
      return pizza_size_price;
    } else {
      alert("피자 사이즈 가격 오류남");
      return pizza_size_price;
    }
  }

  getDough_price() {
    var dough_price = 0;
    if (this.state.currentOrder.selected_dough === "origin") {
      return dough_price;
    } else if (this.state.currentOrder.selected_dough === "thin") {
      return dough_price + 1000;
    } else if (this.state.currentOrder.selected_dough === "napoli") {
      return dough_price + 1500;
    } else {
      alert("피자 도우 가격 오류남");
    }
  }

  getCheese_price() {
    var cheese_price = 0;
    if (this.state.currentOrder.selected_cheese === "mozzarella") {
      return cheese_price;
    } else if (this.state.currentOrder.selected_cheese === "cheddar") {
      return cheese_price + 500;
    } else if (this.state.currentOrder.selected_cheese === "gorgonzola") {
      return cheese_price + 1000;
    } else {
      alert("피자 치즈 가격 오류남");
    }
  }

  getPrice_sum() {
    var price_sum =
      this.getPizza_size_price() +
      this.getDough_price() +
      this.getCheese_price();
    return price_sum;
  }

  render() {
    var currentPizza = this.state.currentPizza;
    console.log("렌더링 완료");
    // 아래처럼 _price_sum를 총 금액에 ${_price_sum}로 주면, client 입장에서는 총 금액을 확인할 수 있지만, 내부적으로 state에 값이 입력되지 않는다.
    // 내가 원하는 것은 <select>의 option선택에 따라 state가 바뀌고, 그 state에 맞춰 금액이 client에서 나타나는 것이다.
    // var _price_sum = this.getPrice_sum();
    // console.log("price_sum 확인용 : " + _price_sum);

    return (
      <div className="pizzaDetailInfoPage Body-Container">
        <div className="pizzaOutlineNOrder-box">
          <div className="pizzaOutline-box">
            <img src={currentPizza.p_img} alt={currentPizza.p_name} />
            <div className="pizza_otherImg"></div>
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
                    //여기에서 setState를 사용하지 않고 직접 값을 입력한 이유는, 두 번 setState할 시 렌더링이 두 번 되어 값이 내부-외부 값이 일치하지 않았기에,
                    //먼젓번 selected_size에 직접 대입을 해주고 두번째에 setState를 이용해 이 때 렌더링 하게 해 주었다.
                    this.state.currentOrder.selected_size = e.target.value;
                    // this.setState({ selected_size: e.target.value });
                    var _price_sum = this.getPrice_sum();
                    var { currentOrder } = this.state;
                    this.setState({
                      currentOrder: {
                        selected_size: currentOrder.selected_size,
                        selected_dough: currentOrder.selected_dough,
                        selected_cheese: currentOrder.selected_cheese,
                        price_sum: _price_sum,
                      },
                    });
                  }.bind(this)}
                >
                  <option value="medium">{`M (미디엄, ${currentPizza.p_price.p_M_price} 원)`}</option>
                  <option value="large">{`L (라지, ${currentPizza.p_price.p_L_price} 원)`}</option>
                </select>
                <label htmlFor="p_dough">도우 : </label>
                <select
                  name="p_dough"
                  id="p_dough"
                  value={this.state.currentOrder.selected_dough}
                  onChange={function (e) {
                    this.state.currentOrder.selected_dough = e.target.value;
                    // this.setState({ selected_dough: e.target.value }); 이 setState 대신 위의 것처럼 state에 직접대입하였다.
                    var _price_sum = this.getPrice_sum();
                    var { currentOrder } = this.state;
                    this.setState({
                      currentOrder: {
                        selected_size: currentOrder.selected_size,
                        selected_dough: currentOrder.selected_dough,
                        selected_cheese: currentOrder.selected_cheese,
                        price_sum: _price_sum,
                      },
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
                    this.state.currentOrder.selected_cheese = e.target.value;
                    // this.setState({ selected_cheese: e.target.value }); 이 setState 대신 위의 것처럼 state에 직접대입하였다.
                    var _price_sum = this.getPrice_sum();
                    var { currentOrder } = this.state;
                    this.setState({
                      currentOrder: {
                        selected_size: currentOrder.selected_size,
                        selected_dough: currentOrder.selected_dough,
                        selected_cheese: currentOrder.selected_cheese,
                        price_sum: _price_sum,
                      },
                    });
                  }.bind(this)}
                >
                  <option value="mozzarella">모짜렐라 (기본)</option>
                  <option value="cheddar">체다 (+500원)</option>
                  <option value="gorgonzola">고르곤졸라 (+1000원)</option>
                </select>
              </form>
              <span className="pizzaOrder_price">{`${this.state.currentOrder.price_sum} 원`}</span>
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
