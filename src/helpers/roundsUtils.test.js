import { calculateTotal } from './roundsUtils';

it('should calcualte total properly', () => {
    const orders = {
        drink1: {
            name: 'Drink 1',
            price: 20,
            count: 1
        },
        drink2: {
            name: 'Drink 2',
            price: 15,
            count: 2
        },
    };
    const total = calculateTotal(orders);

    expect(total).toEqual(50);
});

it('should work with no orders', () => {
    const orders = {
    };

    const total = calculateTotal(orders);

    expect(total).toEqual(0);
});
