import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Hero from './hero/hero';
import Tech from './tech/tech';
import Clients from './clients/clients';

class Main extends Component {
    render() {
        return(
            <main>
                <Container>
                    <Hero hello="Hi, I'm Dave!" desc="I'm a Full Stack Dev working in Toronto."/>
                    <Tech />
                    <Clients />
                </Container>
            </main>
        );
    }
}

export default Main;