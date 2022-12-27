import React, { Component } from 'react';
import Coin from './Coin';
import { head, tail, transparent } from './images';
import './Flipper.css';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null, 
            nFlips: 0,
            nHeads: 0, 
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        coins: [
            {side: "head", imgSrc: head},
            {side: "tail", imgSrc: tail}
        ]
    }

    flip() {
        const newCoin = this.props.coins[Math.floor(Math.random() * this.props.coins.length)];
        this.setState(currState => {
            return {
                currCoin: newCoin, 
                nFlips: currState.nFlips + 1,
                nHeads: currState.nHeads + (newCoin.side === 'head' ? 1 : 0),    
                nTails: currState.nTails + (newCoin.side === 'tail' ? 1 : 0)    
            };
        });
    }

    handleClick() {
        this.flip();
    }

    render() {
        return (
            <div className="Flipper">
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin 
                    ? <Coin src={this.state.currCoin.imgSrc} alt={this.state.currCoin.side} />
                    : <Coin src={transparent} alt="transparent" />
                }
                <button onClick={this.handleClick}>Flip me! 😏</button>
                <div>
                    <h3>Total flips: {this.state.nFlips}</h3>
                    <h3>Heads: {this.state.nHeads}</h3>
                    <h3>Tails: {this.state.nTails}</h3>
                </div>
            </div>
        )
    }
}

export default Flipper;