import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewOne extends Component {
  render() {
    return (
      <div>
        <p>View One</p>
        <button>Next</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewOne);
