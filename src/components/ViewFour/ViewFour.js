import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


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
        <p>View Four</p>
        <div>
            <p>Any comments you want to leave?</p>
            <input 
                id="additionalComments" 
                placeholder="Enter a comment" 
                value={this.state.additionalComment} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <button onClick={this.submitAdditionalComment}><Link to='/5'>Submit</Link></button>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewFour);
