import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewThree extends Component {
  render() {
    return (
      <div>
        <p>View Three</p>
        <div>
          <button><Link to='/4'>Next</Link></button>
          {/* <Button className={classes.nextButton}onClick={this.submitCustomerInfo}><Link to='/2'>Next</Link></Button> */}
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewThree);
