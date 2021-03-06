import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        {console.log(props, 'Child')}
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=240x240`}/>
        <h1>{props.monster.name}</h1>
    </div>
);