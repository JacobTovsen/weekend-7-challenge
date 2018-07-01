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

class ViewFour extends Component {
    constructor(){
        super();

        this.state= {
            additionalComment: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            additionalComment: event.target.value
        })
    }

    submitAdditionalComment = (event) => {
        const action = {type: 'SET_ADDITIONAL_COMMENT', payload: this.state.additionalComment};
        this.props.dispatch(action);
    }
    

  render() {
    return (
      <div>
        <p>4 of 4 pages</p>
        <div>
            <p>Any comments you want to leave?</p>
            <TextField
                id="additionalComments" 
                label="Enter a comment" 
                value={this.state.additionalComment} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <Button onClick={this.submitAdditionalComment}><Link to='/5'>Submit</Link></Button>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(ViewFour);