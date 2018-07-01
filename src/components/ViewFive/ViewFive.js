import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewFive extends Component {

    componentDidMount() {
        this.postFeedbackToDatabase()
    }

    postFeedbackToDatabase = () => {
        const body = {
            feeling: this.props.reduxStore.feedbackReducer.feelingToday,
            understanding: this.props.reduxStore.feedbackReducer.understandingContent,
            support: this.props.reduxStore.feedbackReducer.beingSupported,
            comments: this.props.reduxStore.feedbackReducer.additionalComment,
        }
        console.log(body);
        axios.post('/feedback', body)
            .then((response) => {
                console.log(response);
                const action = {type: 'CLEAR_STATE', payload: {}};
                this.props.dispatch(action);
            }) // end axios POST
    } // end postFeedbackToDatabase

  render() {
    return (
      <div>
        <p>Your feedback has been submitted.</p>
        <div>
            <p>Thank you!</p>
            <button><Link to='/'>Leave New Feedback</Link></button>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewFive);
