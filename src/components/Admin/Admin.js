import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Admin extends Component {
  render() {
    return (
        <div>
            <div>
                <p>Admin View</p>
                <p>.map all of the data from the database here</p>
            </div>
            <div>
                {/* <table>
                    <thead>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.pizzaReducer.cart.map((pizza) => {
                    return <CheckoutItem
                    key = {pizza.name}
                    pizza = {pizza}
                    />
                        })}
                    </tbody>
                </table> */}
            </div>
        </div>
    
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);
