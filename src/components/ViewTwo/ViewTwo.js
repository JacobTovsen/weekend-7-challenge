import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewTwo extends Component {
  render() {
    return (
      <div>
        <p>View Two</p>
        <div>
          <button><Link to='/3'>Next</Link></button>
          {/* <Button className={classes.nextButton}onClick={this.submitCustomerInfo}><Link to='/2'>Next</Link></Button> */}
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewTwo);
