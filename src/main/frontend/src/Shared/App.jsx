import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../CSS/App.css';
import Home from '../Pages/Home';
import Menu from '../Component/Menu';
import Footer from '../Component/Footer';
import CreateMember from '../Pages/CreateMember';
import MyPage from '../Pages/MyPage';
import ChatBotIntro from '../Pages/ChatBotIntro';
import ChatBotDemo from '../Pages/ChatBotDemo';
import MemberIntro from '../Pages/MemberIntro';

class App extends Component {

    render() {
        return (
            <div id="App">
                {/*Menu bar*/}
                <Menu/>
                {/*Body side*/}
                <Route exact path="/" component={Home}/>
                <Route path="/CreateMember" component={CreateMember}/>
                <Route path="/MyPage" component={MyPage}/>
                <Route path="/ChatBotIntro" component={ChatBotIntro}/>
                <Route path="/ChatBotDemo" component={ChatBotDemo}/>
                <Route path="/MemberIntro" component={MemberIntro}/>
                {/*Footer Side*/}
                <div className="Footer">
                    <Footer/>
                </div>
            </div>

        );
    }
}

// {/*<Switch>*/}
// {/*    <Route path="/about/:name" component={About}/>*/}
// {/*    <Route path="/about" component={About}/>*/}
// {/*</Switch>*/}
export default App;