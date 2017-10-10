import React from 'react';
import { calculateTotal } from '../helpers/roundsUtils';

export default ({ orders }) => {
    const total = calculateTotal(orders);
    return (<header className="order-total">
        Total: £{total}
    </header>);
}