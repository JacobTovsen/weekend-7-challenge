import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewThree extends Component {
  render() {
    return (
      <div>
        <p>View Three</p>
        <button>Next</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewThree);
