import React, { Component } from 'react';
import Drink from '../components/Drink';
import OrderTotal from '../components/OrderTotal';
import { getPub } from '../helpers/apiClient';
import './PubDetails.css';

class PubDetails extends Component {
    state = {
        pubDetails: {},
        orders: {}
    }
    
    async componentDidMount() {
        const { pub } = this.props;
        const { id } = pub;

        const pubDetails = await getPub(id);

        this.setState({
            pubDetails
        });
    }

    addDrink = (drink) => {
        const orders = this.state.orders;
        
        const order = orders[drink.drinkId] || {
            ...drink,
            count: 0
        };

        order.count += 1;

        orders[drink.drinkId] = order;

        this.setState({
            orders
        });

    }

    renderDrinks() {
        const { pubDetails, orders } = this.state;
        const { drinks = [] } = pubDetails;
        
        return drinks.map(drink => {
            const order = orders[drink.drinkId] || {
                ...drink,
                count: 0
            };
            
            return <Drink key={drink.drinkId} order={order} drink={drink} addDrink={this.addDrink} />
        });
    }

    renderOrderDetails() {
        const { orders } = this.state;
        const drinkOrders = Object.keys(orders);

        if(Object.keys(orders).length === 0) {
            return null;
        }

        return (
            <div className="order-details">
                <h1>Order Summary</h1>
                <OrderTotal orders={orders} />
                <ul>
                    {
                        drinkOrders.map(drinkId => {
                            const order = orders[drinkId];
                            return (<li key={drinkId}>
                                <span className="drink-name">{order.name} </span>
                                <span className="drink-value">{order.count} x {order.price} = £{order.count * order.price}</span>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="pub-container">
                <div className="drink-container">
                    {this.renderDrinks()}
                </div>
                { this.renderOrderDetails() }
            </div>
        )
    }
}

export default PubDetails;