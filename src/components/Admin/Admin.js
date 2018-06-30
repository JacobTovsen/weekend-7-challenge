import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Admin extends Component {

    componentDidMount() {
        this.getFeedbackItemsFromDatabase();
    }

    getFeedbackItemsFromDatabase() {
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            const action = {type: 'SET_FEEDBACK', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error in GET:', error);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>Admin View</p>
                    <p>.map all of the data from the database here</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {this.props.reduxStore.DatabaseReducer.cart.map((feedback) => {
                        return <FeedbackItem
                        key = {feedback.name}
                        feedback = {feedback}
                        />
                            })}
                        </tbody> */}
                    </table>
                </div>
            </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);
