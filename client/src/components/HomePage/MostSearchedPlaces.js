import React from 'react';
import {
    Row,
    Col,
    Media
} from 'reactstrap';

import cebu from '../../images/cebu.jpeg';
import siargao from '../../images/siargao.jpg';
import bohol from '../../images/bohol.jpg';
import camiguin from '../../images/camiguin.jpg';

export default class MostSearchedPlaces extends React.Component {
    render() {
        return (
            <div>
                <h4 className="h4-no-subtext">Most Searched Places</h4>
                <Row id="most-searched-places">
                    <Col lg="3">
                        <div className="place">
                            <div className="name">
                                Cebu
                                <div className="veh-count">500 vehicles</div>
                            </div>
                            <div className="ave-price">
                                <div>Average price:</div>
                                <div>Motorbike: ₱ 500 Car: ₱ 2000</div>
                            </div>
                            <Media href="#">
                                <Media src={cebu} className="img-responsive" alt="Cebu" />
                            </Media>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="place">
                            <div className="name">
                                Siargao
                                <div className="veh-count">500 vehicles</div>
                            </div>
                            <div className="ave-price">
                                <div>Average price:</div>
                                <div>Motorbike: ₱ 500 Car: ₱ 2000</div>
                            </div>
                            <Media href="#">
                                <Media src={siargao} className="img-responsive" alt="Siargao" />
                            </Media>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="place">
                            <div className="name">
                                Bohol
                                <div className="veh-count">500 vehicles</div>
                            </div>
                            <div className="ave-price">
                                <div>Average price:</div>
                                <div>Motorbike: ₱ 500 Car: ₱ 2000</div>
                            </div>
                            <Media href="#">
                                <Media src={bohol} className="img-responsive" alt="Bohol" />
                            </Media>
                            <div className="ave-price">
                                <div>Average price:</div>
                                <div>Motorbike: ₱ 500 Car: ₱ 2000</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="place">
                            <div className="name">
                                Camiguin
                                <div className="veh-count">500 vehicles</div>
                            </div>
                            <div className="ave-price">
                                <div>Average price:</div>
                                <div>Motorbike: ₱ 500 Car: ₱ 2000</div>
                            </div>
                            <Media href="#">
                                <Media src={camiguin} className="img-responsive" alt="Camiguin" />
                            </Media>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}