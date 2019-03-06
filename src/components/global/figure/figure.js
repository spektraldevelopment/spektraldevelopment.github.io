import React, { Component } from 'react';

import './figure.scss';

class Figure extends Component {
    render() {
        return(
            <figure className="db-figure figure">
                <img src={this.props.src} className={`${this.props.class ? this.props.class : ''} figure-img img-fluid rounded`} alt={this.props.alt} />
                <figcaption className="figure-caption text-center">{this.props.caption}</figcaption>
            </figure>
        );
    }
}

export default Figure;