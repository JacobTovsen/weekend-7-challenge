import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewFour extends Component {
  render() {
    return (
      <div>
        <p>View Four</p>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewFour);
