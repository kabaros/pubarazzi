import React from 'react';
import './Drink.css';

export default (props) => {
    const { drink, order, addDrink } = props;
    const highlighted = order.count > 0? 'highlighted': '';

    const warning = order.count > 2 ? (order.count < 6? '-warning': '-danger') : '';
    
    return (
        <div className={`drink ${highlighted}${warning}`}>
            <h1>{drink.name}</h1>
            <h2>{order.count}</h2>
            
            <div onClick={() => addDrink(drink)} 
                className='add-drink'>+</div>
        </div>
    )
}