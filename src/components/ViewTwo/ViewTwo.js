import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


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
            <input 
                id="understandingContent" 
                placeholder="Enter 1-5" 
                value={this.state.understandingContent} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          <button onClick={this.submitUnderstandingContent}><Link to='/3'>Next</Link></button>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewTwo);
