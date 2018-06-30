import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class ViewOne extends Component {
    constructor(){
        super();

        this.state= {
            feelingToday: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            feelingToday: event.target.value
        })
    }

    submitFeelingToday = (event) => {
        const action = {type: 'SET_FEELING_TODAY', payload: this.state.feelingToday};
        this.props.dispatch(action);
    }
    

  render() {
    return (
      <div>
        <p>View One</p>
        <div>
            <p>How are you feeling today?</p>
            <input 
                id="feelingToday" 
                placeholder="Enter 1-5" 
                value={this.state.feelingToday} 
                onChange={this.handleInputChange} 
            />
        </div>
        <div>
          {/* <button><Link to='/2'>Next</Link></button> */}
          <button onClick={this.submitFeelingToday}><Link to='/2'>Next</Link></button>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(ViewOne);
