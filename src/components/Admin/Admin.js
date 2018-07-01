import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Admin extends Component {

    componentDidMount() {
        this.getFeedbackItemsFromDatabase();
        console.log(this.props.reduxStore.databaseReducer);
    }

    getFeedbackItemsFromDatabase() {
        console.log('in axios GET db');
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
                        <tbody>
                            {this.props.reduxStore.databaseReducer.map((feedback) => {
                        return <FeedbackItem
                        key = {feedback.id}
                        feedback = {feedback}
                        getFeedbackItemsFromDatabase = {this.getFeedbackItemsFromDatabase}
                        />
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);
