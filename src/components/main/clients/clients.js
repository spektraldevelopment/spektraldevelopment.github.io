import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Clients extends Component {
    render() {
        return(
            <Row className="db-clients">
                <Col sm="12">
                    <h2>Clients:</h2>
                    <p>(To name a few)</p>
                </Col>
                <Col xs="6" sm="3">
                    Item 1
                </Col>
                <Col xs="6" sm="3">
                    Item 2
                </Col>
                <Col xs="6" sm="3">
                    Item 3
                </Col>
                <Col xs="6" sm="3">
                    Item 4
                </Col>
            </Row>
        );
    }
}

export default Clients;