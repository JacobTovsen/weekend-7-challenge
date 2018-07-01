import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class FeedbackItem extends Component {
    
    getFeedbackItemsFromDatabase() {
        console.log('in axios GET db');
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            const action = {type: 'SET_FEEDBACK', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error in GET:', error);
        }) // end axios
    } // end getFeedbackItemsFromDatabase
    //same GET code from Admin.js, but this solves async issues

    deleteFeedback = () => {
        console.log('in DELETE to delete:', this.props.feedback.id);
        let prompt = window.confirm('Are you sure you want to delete?');
        if(prompt) {
            axios.delete(`/feedback/${this.props.feedback.id}`)
                .then((response) => {
                    this.getFeedbackItemsFromDatabase();
                }).catch((error) => {
                    console.log('error in DELETE', error);
                }) // end axios
        } // end prompt
    } // end deleteFeedback

    render() {
        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={this.deleteFeedback}>Delete</button></td>
            </tr>
    );
  }
}

export default connect(mapReduxStateToProps)(FeedbackItem);
