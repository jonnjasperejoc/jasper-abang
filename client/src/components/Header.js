import React, { Component } from "react";
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Media,
    Button
} from "reactstrap";
import logo from "../images/logo.png";

import LoginModal from "./LoginModal";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            loginModal: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    login = () => {
        if (localStorage.token) {
            this.props.history.push("/user");
        } else {
            this.toggleModal();
        }
    };

    logout = () => {
        localStorage.removeItem("token");
    };

    toggleModal = () => {
        this.setState(prevState => ({
            loginModal: !prevState.loginModal
        }));
    };

    render() {
        return (
            <div className="header">
                <LoginModal
                    toggleModal={this.toggleModal}
                    loginModal={this.state.loginModal}
                    history={this.props.history}
                />
                <Container>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">
                            <Media
                                src={logo}
                                className="app-logo"
                                alt="Abang"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {this.props.showSignupButton ? (
                                    <NavItem>
                                        <a
                                            href="/signup"
                                            className="btn btn-primary btn-sm"
                                        >
                                            Signup
                                        </a>
                                    </NavItem>
                                ) : (
                                    ""
                                )}
                                {this.props.showLoginButton ? (
                                    <NavItem className="lastChild">
                                        <Button
                                            color="primary"
                                            size="sm"
                                            onClick={this.login}
                                        >
                                            Login
                                        </Button>
                                    </NavItem>
                                ) : (
                                    ""
                                )}
                                {this.props.showLogoutButton ? (
                                    <NavItem>
                                        <a
                                            href="/"
                                            className="btn btn-primary btn-sm"
                                            onClick={this.logout}
                                        >
                                            Logout
                                        </a>
                                    </NavItem>
                                ) : (
                                    ""
                                )}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;
