import React from 'react';
import { render } from 'react-dom';
import AppHeader from './AppHeader';

it('renders default title', () => {
    const div = document.createElement('div');
    render(<AppHeader />, div);

    expect(div).toMatchSnapshot();
});


it('renders passed title', () => {
    const div = document.createElement('div');
    render(<AppHeader title="Something" />, div);

    expect(div).toMatchSnapshot();
});
