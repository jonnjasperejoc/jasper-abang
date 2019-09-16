import React from 'react';
import {
    Row,
    Col,
    Media
} from 'reactstrap';

import motorcycle_rental_cebu from '../../images/motorcycle-rental-cebu.jpg';
import motorcycle_rental_siargao from '../../images/motorcycle-rental-siargao.jpg';
import motorcycle_rental_bohol from '../../images/motorcycle-rental-bohol.jpg';
import motorcycle_rental_camiguin from '../../images/motorcycle-rental-camiguin.jpg';

export default class MostPopularAndTrustedOwners extends React.Component {
    render() {
        return (
            <div id="most-popular-and-trusted-vehicle-owners">
                <h4 className="h4-no-subtext">Most Popular And Trusted Vehicle Owners</h4>
                <Row>
                    <Col lg="3">
                        <Media href="#">
                            <Media src={motorcycle_rental_cebu} className="img-responsive" alt="Motorcyle Rental Cebu" />
                            <div className="name">Cebu Motorbike Rental</div>
                            <div className="reviews-count">400 Reviews</div>
                        </Media>
                    </Col>
                    <Col lg="3">
                        <Media href="#">
                            <Media src={motorcycle_rental_siargao} className="img-responsive" alt="Motorcyle Rental Siargao" />
                            <div className="name">Siargao Motorbike Rental</div>
                            <div className="reviews-count">400 Reviews</div>
                        </Media>
                    </Col>
                    <Col lg="3">
                        <Media href="#">
                            <Media src={motorcycle_rental_bohol} className="img-responsive" alt="Motorcyle Rental Bohol" />
                            <div className="name">Bohol Motorbike Rental</div>
                            <div className="reviews-count">400 Reviews</div>
                        </Media>
                    </Col>
                    <Col lg="3">
                        <Media href="#">
                            <Media src={motorcycle_rental_camiguin} className="img-responsive" alt="Motorcyle Rental Camiguin" />
                            <div className="name">Camiguin Motorbike Rental</div>
                            <div className="reviews-count">400 Reviews</div>
                        </Media>
                    </Col>
                </Row>
            </div>
        );
    }
}