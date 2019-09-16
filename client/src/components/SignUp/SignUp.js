import React, { Component } from "react";

import {
    Alert,
    Container,
    Jumbotron,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fnameDisabled: false,
            lnameDisabled: false,
            emailDisabled: false,
            pwordDisabled: false,
            submitBtnDisabled: false,
            error: false,
            errorMessage: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            fnameDisabled: true,
            lnameDisabled: true,
            emailDisabled: true,
            pwordDisabled: true,
            submitBtnDisabled: true
        });

        const user = {
            fname: e.target.elements.fname.value.trim(),
            lname: e.target.elements.lname.value.trim(),
            email: e.target.elements.email.value.trim(),
            pword: e.target.elements.pword.value.trim()
        };

        axios
            .post("/api/user", user)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                this.props.history.push("/user");
            })
            .catch(err => {
                this.setState({
                    fnameDisabled: false,
                    lnameDisabled: false,
                    emailDisabled: false,
                    pwordDisabled: false,
                    submitBtnDisabled: false,
                    error: true,
                    errorMessage: err.response.data.msg
                });
            });
    };

    render() {
        if (localStorage.token) {
            this.props.history.push("/user");
        }

        return (
            <div>
                <Header
                    showSignupButton={false}
                    showLoginButton={true}
                    history={this.props.history}
                ></Header>
                <Container id="content">
                    <Row>
                        <Col lg="4"></Col>
                        <Col lg="4">
                            <Alert
                                color="danger"
                                className={this.state.error ? "" : "hidden"}
                            >
                                {this.state.errorMessage}
                            </Alert>
                            <Jumbotron>
                                <h4>Signup</h4>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="fname">First name</Label>
                                        <Input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            placeholder="First name"
                                            required
                                            disabled={this.state.fnameDisabled}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="lname">Last name</Label>
                                        <Input
                                            type="text"
                                            name="lname"
                                            id="lname"
                                            placeholder="Last name"
                                            required
                                            disabled={this.state.lnameDisabled}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            required
                                            disabled={this.state.emailDisabled}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="password"
                                            name="pword"
                                            id="password"
                                            placeholder="Password"
                                            required
                                            disabled={this.state.pwordDisabled}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            color="primary"
                                            disabled={
                                                this.state.submitBtnDisabled
                                            }
                                        >
                                            Submit
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Jumbotron>
                        </Col>
                        <Col lg="4"></Col>
                    </Row>
                </Container>
                <Footer className="interior-page" />
            </div>
        );
    }
}

export default SignUp;
