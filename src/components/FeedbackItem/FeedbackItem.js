import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class FeedbackItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button>Delete</button></td>
            </tr>
    );
  }
}

export default connect(mapReduxStateToProps)(FeedbackItem);
