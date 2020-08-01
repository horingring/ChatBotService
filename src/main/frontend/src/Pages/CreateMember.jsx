import React from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios'
import $ from 'jquery'

class CreateMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name:'',
            user_id: '',
            user_password: '',
            user_city:'',
            user_street: '',
            user_zipcode: ''
        }
    }

    componentDidMount() {
    }

    updateValue = (event) => {
        let nam = event.target.id;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.id);

        axios.post('/api/member/createMember', {
            id: this.state.user_id,
            name: this.state.user_name,
            password: this.state.user_password,
            city: this.state.user_city,
            street: this.state.user_street,
            zipcode: this.state.user_zipcode
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // getApi = () => {
    //     axios.post("http://localhost:8080/api/member/Login").then(res => {
    //         console.log(res);
    //         this.setState({message: res.data.message})
    //     }).catch(res => console.log(res))
    // }


    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <Form onSubmit={this.handleSubmit} style={{width: "600px", height: "200px"}}>
                    <Form.Group controlId="user_id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="id" onChange={this.updateValue} placeholder="id"/>
                    </Form.Group>

                    <Form.Group controlId="user_name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" onChange={this.updateValue} placeholder="name"/>
                    </Form.Group>

                    <Form.Group controlId="user_password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  onChange={this.updateValue} placeholder="Password"/>
                    </Form.Group>

                    <Form.Group controlId="user_city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" onChange={this.updateValue} placeholder="city"/>
                    </Form.Group>

                    <Form.Group controlId="user_street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="Street"  onChange={this.updateValue} placeholder="Street"/>
                    </Form.Group>

                    <Form.Group controlId="user_zipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control type="Zipcode" onChange={this.updateValue} placeholder="Zipcode"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
};

export default CreateMember;


