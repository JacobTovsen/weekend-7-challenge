import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class FeedbackItem extends Component {

    deleteFeedback = () => {
        console.log('in DELETE to delete:', this.props.feedback.id);
        let prompt = window.confirm('Are you sure you want to delte?');
        if(prompt) {
            axios.delete(`/feedback/${this.props.feedback.id}`)
                .then((response) => {
                    this.props.getFeedbackItemsFromDatabase();
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
