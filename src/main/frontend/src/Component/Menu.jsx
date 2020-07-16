import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/YRB_logo.png';
import {Button, Nav, Navbar, Form} from 'react-bootstrap';
import Login from '../Pages/Login'

const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div id="Header">
            <Navbar bg="dark" variant="dark">
                <Link to="/"><img className="Header_logo" style={{width: "50px", height: "50px"}} src={logo}
                                  alt="yrb 로고"/></Link>
                <Nav className="mr-auto">
                    <Nav.Link style={{margin: "20px" ,fontSize: "30px"}} href="/ChatBotIntro">ChatBot Service</Nav.Link>
                    <Nav.Link style={{margin: "20px" ,fontSize: "30px"}} href="/MemberIntro">Member Introduction</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={() => setModalShow(true)} style={{margin: "10px"}}><Link to="/Login">로그인</Link></Button>
                    <Button variant="outline-info">로그아웃</Button>
                </Form>
            </Navbar>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Menu;