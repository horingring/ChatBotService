import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../../img/pizza/originalPizza.jpg";
import vegetablePizza from "../../img/pizza/vegetablePizza.jpg";
import combinationPizza from "../../img/pizza/combinationPizza.jpg";
import pepperoniPizza from "../../img/pizza/pepperoniPizza.jpg";
import bulgogiPizza from "../../img/pizza/bulgogiPizza.jpg";
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

// 0911, 경호, pizzaDatailInfo_page 컴포넌트 뼈대 완성
class pizzaDetailInfoPage extends Component {
  constructor(props) {
    super(props);
    var props = this.props;
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
      currentPizza: getPizzaDataByIdx(Number(props.match.params.p_idx)),
      currentOrder: {
        selected_size: "medium",
        selected_dough: "origin",
        selected_cheese: "mozzarella",
        price_sum: 0,
      },
    };
    this.getPizza_detailInfoByIdx = this.getPizza_detailInfoByIdx.bind(this);
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

  //p_idx를 이용해 '서버로부터' 피자 상세정보 받아오기 (*라고 가정)
  getPizza_detailInfoByIdx() {
    var pizza_list_data = this.state.pizza_list;
    console.log(pizza_list_data);
    var pizza_detailInfo;
    // console.log(this.props.match.params.p_idx); -> params로 넘어온 정보는 문자타입(원래는 int 타입임)
    // console.log(`${pizza_list_data[0].p_idx}`); -> 문자 타입으로 변환.
    //p_idx이용하여 해당하는 피자의 데이터만 뽑아오기
    //props로 넘어온 idx는 문자형, state에서 가져온 idx는 int형이므로, int형을 문자형으로 바꿔 if문의 조건식을 썼다.
    for (var i = 0; i < pizza_list_data.length; i++) {
      if (this.props.match.params.p_idx === `${pizza_list_data[i].p_idx}`) {
        pizza_detailInfo = pizza_list_data[i];
        console.log(pizza_detailInfo);
        break;
      }
    }
    return pizza_detailInfo;
  }

  //0924, 경호, 옵션 선택에 따른 price_sum 변경 완료!
  getPizza_size_price() {
    var pizza_size_price = 0;
    if (this.state.currentOrder.selected_size === "medium") {
      pizza_size_price = this.getPizza_detailInfoByIdx().p_price.p_M_price;
      return pizza_size_price;
    } else if (this.state.currentOrder.selected_size === "large") {
      pizza_size_price = this.getPizza_detailInfoByIdx().p_price.p_L_price;
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
    var pizza_detailInfo = this.getPizza_detailInfoByIdx();
    console.log("렌더링 완료");
    // 아래처럼 _price_sum를 총 금액에 ${_price_sum}로 주면, client 입장에서는 총 금액을 확인할 수 있지만, 내부적으로 state에 값이 입력되지 않는다.
    // 내가 원하는 것은 <select>의 option선택에 따라 state가 바뀌고, 그 state에 맞춰 금액이 client에서 나타나는 것이다.
    // var _price_sum = this.getPrice_sum();
    // console.log("price_sum 확인용 : " + _price_sum);

    return (
      <div className="pizzaDetailInfoPage Body-Container">
        <div className="pizzaOutlineNOrder-box">
          <div className="pizzaOutline-box">
            <img src={pizza_detailInfo.p_img} alt={pizza_detailInfo.p_name} />
            <div className="pizza_otherImg"></div>
          </div>
          <div className="pizzaOrder-box">
            <div className="pizzaOrder_form-box">
              <h4>{pizza_detailInfo.p_name}</h4>
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
                  <option value="medium">{`M (미디엄, ${pizza_detailInfo.p_price.p_M_price} 원)`}</option>
                  <option value="large">{`L (라지, ${pizza_detailInfo.p_price.p_L_price} 원)`}</option>
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
                    return `/order_page/${pizza_detailInfo.p_idx}/${currentOrder.selected_size}/${currentOrder.selected_dough}/${currentOrder.selected_cheese}`;
                  }.bind(this)}
                >
                  <div className="button pizzaOrder_Immediate-btn">
                    즉시주문
                  </div>
                </Link>
                {/* <Link
                  to={function () {
                    var { currentOrder } = this.state;
                    return `/order_page2/${pizza_detailInfo.p_idx}/${currentOrder.selected_size}/${currentOrder.selected_dough}/${currentOrder.selected_cheese}`;
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
