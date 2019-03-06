import React, { Component } from 'react';
import { 
    Row, 
    Col,
    Jumbotron 
} from 'reactstrap';

class Hero extends Component {
    render() {
        return(
            <Row className="db-hero">
                <Col>
                    <Jumbotron>
                        <h1 className="display-3 text-center">{this.props.hello}</h1>
                        <p className="lead text-center">{this.props.desc}</p>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default Hero;