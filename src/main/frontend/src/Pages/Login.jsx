import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const Login = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        로그인
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="id" placeholder="Enter ID"/>
                            <Form.Text className="text-muted">
                                We'll never share your ID with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button onClick={props.onHide}>닫기</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;