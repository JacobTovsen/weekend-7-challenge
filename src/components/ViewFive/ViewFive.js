import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 

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
    }

  render() {
    return (
      <div>
        <p>View Five</p>
        <div>
            <p>onclick, post to DB, clear reduxStore, route to '/'</p>
            <button><Link to='/'>Next</Link></button>
            {/* <Button className={classes.nextButton}onClick={this.submitCustomerInfo}><Link to='/2'>Next</Link></Button> */}

        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewFive);
