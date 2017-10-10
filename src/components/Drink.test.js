import React from 'react';
import { render } from 'react-dom';
import Drink from './Drink';

it('renders a Drink component', () => {
    const div = document.createElement('div');
    const drink = {
        name: 'mojito'
    };
    const order = {};

    render(<Drink drink={drink} order={order} />, div);

    expect(div).toMatchSnapshot();
});


it('renders a Drink component with a red background if more than 5 orders', () => {
    const div = document.createElement('div');
    const drink = {
        id: '1',
        name: 'mojito'
    };
    const order = {
        count: 10
    };

    render(<Drink drink={drink} order={order} />, div);

    expect(div.innerHTML).toMatch('highlighted-danger')
});


it('renders a Drink component with a warning background if more than 2 and less than 5 5 orders', () => {
    const div = document.createElement('div');
    const drink = {
        id: '1',
        name: 'mojito'
    };
    const order = {
        count: 3
    };

    render(<Drink drink={drink} order={order} />, div);

    expect(div.innerHTML).toMatch('highlighted-warning')
});

