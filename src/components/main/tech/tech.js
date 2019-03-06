import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './tech.scss';

import ReactIcon from "../../../assets/react-logo.svg";
import NodeIcon from "../../../assets/node-logo.svg";
import ReduxIcon from "../../../assets/redux-logo.svg";
import MongoIcon from "../../../assets/mongodb-logo.svg";

import Figure from '../../global/figure/figure';

class Tech extends Component {
    render() {
        return(
            <Row className="db-tech"> 
                <Col sm="12">
                    <h2 className="text-center">Technologies I enjoy working with:</h2>
                    <p className="text-center">(To name a few)</p>
                </Col>
                <Col xs="6" sm="3">
                    <Figure src={ReactIcon} alt="Icon for react framework" caption="React"/>
                </Col>
                <Col xs="6" sm="3">
                    <Figure src={NodeIcon} alt="Icon for node runtime" caption="Node"/>
                </Col>
                <Col xs="6" sm="3">
                    <Figure src={ReduxIcon} alt="Icon for redux framework" caption="Redux"/>
                </Col>
                <Col xs="6" sm="3">
                    <Figure src={MongoIcon} alt="Icon for mongo db" caption="MongoDB" class="db-mongo-logo"/>
                </Col>
            </Row>
        );
    }
}

export default Tech;