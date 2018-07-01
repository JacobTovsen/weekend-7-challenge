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
        }) // end axios GET
    } // end getFeedbackItemsFromDatabase

    render() {
        return (
            <div>
                <div>
                    <p>Admin View</p>
                    <pre>{JSON.stringify(this.props.reduxStore.databaseReducer)}</pre>

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
                                <th>Flag</th>
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

        ); // end return 
    } // end render
} // end Admin

export default connect(mapReduxStateToProps)(Admin);
