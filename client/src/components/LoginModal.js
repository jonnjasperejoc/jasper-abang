import React from "react";
import {
    Alert,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input
} from "reactstrap";

import axios from "axios";

class LoginModal extends React.Component {
    state = {
        emailDisabled: false,
        pwordDisabled: false,
        loginBtnDisabled: false,
        error: false,
        errorMsg: ""
    };

    componentDidUpdate(prevProps, prevState) {
        // Make sure login fields, button and error/error message are clear every modal pop-up
        if (this.props.loginModal && prevState.error) {
            this.setState({
                emailDisabled: false,
                pwordDisabled: false,
                loginBtnDisabled: false,
                error: false,
                errorMsg: ""
            });
        }
    }

    submit = e => {
        e.preventDefault();

        this.setState({
            emailDisabled: true,
            pwordDisabled: true,
            loginBtnDisabled: true
        });

        const cred = {
            email: e.target.elements.email.value.trim(),
            pword: e.target.elements.pword.value.trim()
        };

        axios
            .post("/api/auth/login", cred)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                this.props.history.push("/user");
            })
            .catch(err => {
                this.setState({
                    emailDisabled: false,
                    pwordDisabled: false,
                    loginBtnDisabled: false,
                    error: true,
                    errorMsg: err.response.data.msg
                });
            });
    };

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.loginModal}
                    toggle={this.props.toggleModal}
                    className="login-modal"
                >
                    <Form onSubmit={this.submit}>
                        <ModalHeader toggle={this.props.toggleModal}>
                            Login
                        </ModalHeader>
                        <ModalBody>
                            <Alert
                                color="danger"
                                className={this.state.error ? "" : "hidden"}
                            >
                                {this.state.errorMsg}
                            </Alert>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    disabled={this.state.emailDisabled}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="pword"
                                    placeholder="Password"
                                    required
                                    disabled={this.state.pwordDisabled}
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                disabled={this.state.loginBtnDisabled}
                            >
                                Login
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;
