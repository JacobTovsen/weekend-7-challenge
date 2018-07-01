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

class ViewTwo extends Component {
    constructor(){
        super();

        this.state= {
            understandingContent: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            understandingContent: event.target.value
        })
    }

    submitUnderstandingContent = (event) => {
        const action = {type: 'SET_UNDERSTANDING_CONTENT', payload: this.state.understandingContent};
        this.props.dispatch(action);
    }
    

  render() {
    return (
      <div>
        <p>2 of 4 pages</p>
        <div>
            <p>How well are you understanding the content?</p>
            <TextField
                id="understandingContent" 
                label="Enter 1-5" 
                value={this.state.understandingContent} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <Button onClick={this.submitUnderstandingContent}><Link to='/3'>Next</Link></Button>
        </div>
      </div>
    );
  }
}

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps)
)(ViewTwo);