import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewTwo extends Component {
  render() {
    return (
      <div>
        <p>View Two</p>
        <button>Next</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewTwo);
