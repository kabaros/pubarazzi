import _ from 'lodash';

export const calculateTotal = (orders) => {
    const orderValues = _.mapValues(orders, (order) => {
        return Number(order.price) * Number(order.count);
    });

    return _.values(orderValues).reduce((sum, drinkTotal) => {
        return sum + drinkTotal;
    }, 0);
}