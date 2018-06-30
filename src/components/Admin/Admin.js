import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Admin extends Component {
  render() {
    return (
      <div>
        <p>Admin View</p>
        <p>.map all of the data from the database here</p>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);
