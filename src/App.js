import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={props.icon} />
            <div className="card__descriptionText">
                {props.name}
                <br/>
                {props.desc}
            </div>
        </div>
        <div className="card__price">{props.price}</div>
    </div>
);

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const App = () => (
    <CardGroup>
        <Card icon="icon fa fa-thumbs-o-up card__descriptionIcon" name="Trial" price="Free!" />
        <Card icon="icon fa fa-trophy card__descriptionIcon" name="Basic Tier" desc="(most popular)" price="$10.00" />
        <Card icon="icon fa fa-bolt card__descriptionIcon" name="Advanced Tier" desc="(only for enterprise-level professionals)" price="$6,000.00" />
    </CardGroup>
);

export default App;
