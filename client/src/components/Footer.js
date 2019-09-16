import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className={this.props.className}>
                <Container>
                    <div>Copyright © 2019 Abang.com™. All rights reserved.</div>
                </Container>
            </div>
        );
    }
}

export default Footer;