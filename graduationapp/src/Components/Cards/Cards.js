import React from 'react';
import './Cards.css';

function Cards(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                {props.children}
            </div>
        </div>
    );
}

export default Cards;