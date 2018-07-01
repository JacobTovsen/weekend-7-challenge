import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 
import { compose } from 'redux';

// Material-UI imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = {

}

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
        <p>3 of 4 pages</p>
        <div>
            <p>How well are you being supported?</p>
            <TextField 
                id="beingSupported" 
                label="Enter 1-5" 
                value={this.state.beingSupported} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <Button onClick={this.submitBeingSupported}><Link to='/4'>Next</Link></Button>
        </div>
      </div>
    );
  }
}

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps)
)(ViewThree);