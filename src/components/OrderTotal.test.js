import React from 'react';
import { render } from 'react-dom';
import OrderTotal from './OrderTotal';

it('renders default title', () => {
    const div = document.createElement('div');
    const orders = {
        drink1: {
            count: 2,
            price: 10
        },
        drink3: {
            count: 1,
            price: 20
        }
    }
    render(<OrderTotal orders={orders} />, div);

    expect(div).toMatchSnapshot();
});

