import React, { Component } from "react";

import { Container, ListGroup, ListGroupItem } from "reactstrap";

import Header from "../Header";
import Footer from "../Footer";
import SearchBox from "./SearchBox";
import MostSearchedPlaces from "./MostSearchedPlaces";
import MostPopularAndTrustedOwners from "./MostPopularAndTrustedOwners";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header
                    showSignupButton={true}
                    showLoginButton={true}
                    history={this.props.history}
                ></Header>
                <Container id="content">
                    <SearchBox></SearchBox>
                    <ListGroup id="result">
                        <ListGroupItem tag="a" href="#">
                            Dapibus ac facilisis in
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#">
                            Morbi leo risus
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#">
                            Porta ac consectetur ac
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#">
                            Vestibulum at eros
                        </ListGroupItem>
                    </ListGroup>
                    <MostSearchedPlaces />
                    <MostPopularAndTrustedOwners />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
