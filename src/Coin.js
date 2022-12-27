import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <h1>Coin</h1>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}

export default Coin;