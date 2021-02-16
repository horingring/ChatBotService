import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../CSS/App.css";
import Home from "../Pages/Home";
import Menu from "../Component/Menu";
import Footer from "../Component/Footer";
import CreateMember from "../Pages/CreateMember";
import MyPage from "../Pages/MyPage";
import PizzaMenu from "../Pages/PizzaMenu";
import ChatBotIntro from "../Pages/ChatBotIntro";
import ChatBotDemo from "../Pages/ChatBotDemo";
import MemberIntro from "../Pages/MemberIntro";
import pizzaDetailInfo_page from "../Pages/pizzaMenu/pizzaDetailInfo_page";
import order_page from "../Pages/pizzaMenu/order_page";
import order_page2 from "../Pages/pizzaMenu/order_page";
import orderComplete_page from "../Pages/pizzaMenu/orderComplete_page";
import basketList_page from "../Pages/pizzaMenu/basketList_page";
import device from "../Pages/pizzaMenu/device";

class App extends Component {
  render() {
    return (
      <div id="App">
        {/*Menu bar*/}
        <Menu />
        {/*Body side*/}
        <Route exact path="/" component={Home} />
        <Route path="/CreateMember" component={CreateMember} />
        <Route path="/MyPage" component={MyPage} />
        <Route path="/PizzaMenu" component={PizzaMenu} />
        <Route path="/ChatBotIntro" component={ChatBotIntro} />
        <Route path="/ChatBotDemo" component={ChatBotDemo} />
        <Route path="/MemberIntro" component={MemberIntro} />
        <Route
          path="/pizzaDetailInfo_page/:p_idx"
          component={pizzaDetailInfo_page}
        />
        <Route
          path="/order_page/:p_idx/:p_size/:p_dough/:p_cheese"
          component={order_page}
        />
        {/* 객체단위 props 전달용 test 라우팅 */}
        <Route
          path="/order_page2/:p_idx/:p_size/:p_dough/:p_cheese"
          component={order_page2}
        />
        <Route path="/orderComplete_page" component={orderComplete_page} />
        <Route path="/basketList_page" component={basketList_page} />
        <Route path="/device" component={device} />

        {/*Footer Side*/}
        <Footer />
      </div>
    );
  }
}

// {/*<Switch>*/}
// {/*    <Route path="/about/:name" component={About}/>*/}
// {/*    <Route path="/about" component={About}/>*/}
// {/*</Switch>*/}
export default App;
