import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewFive extends Component {
  render() {
    return (
      <div>
        <p>View Five</p>
        <button>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewFive);
