import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewThree extends Component {
    constructor(){
        super();

        this.state= {
            beingSupported: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            beingSupported: event.target.value
        })
    }

    submitBeingSupported = (event) => {
        const action = {type: 'SET_BEING_SUPPORTED', payload: this.state.beingSupported};
        this.props.dispatch(action);
    }
    

  render() {
    return (
      <div>
        <p>View Three</p>
        <div>
            <p>How well are you being supported?</p>
            <input 
                id="beingSupported" 
                placeholder="Enter 1-5" 
                value={this.state.beingSupported} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <button onClick={this.submitBeingSupported}><Link to='/4'>Next</Link></button>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewThree);
