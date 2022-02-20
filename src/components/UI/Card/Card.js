import React from 'react';
import classes from './Card.module.css'

class Card extends React.Component {
   
    render() {
        return (
            <div className={`${classes.card} ${this.props.className}`}>{this.props.children}</div>
        )
    }
};

export default Card;