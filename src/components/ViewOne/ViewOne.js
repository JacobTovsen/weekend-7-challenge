import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { compose } from 'redux';
import './ViewOne.css';

// Material-UI imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = {

}

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
        <Card className="card">
            <CardHeader>1 of 4 pages </CardHeader>
            <CardContent>
                <Typography paragraph>How are you feeling today?</Typography>
                <TextField 
                    id="feelingToday" 
                    label="Enter a value 1-5" 
                    value={this.state.feelingToday} 
                    onChange={this.handleInputChange} 
                />
                
                <Typography paragraph>I'm very stressed.   1 - 2 - 3 - 4 - 5   I'm feeling great!</Typography>
                <Button onClick={this.submitFeelingToday}><Link to='/2'>Next</Link></Button>
            </CardContent>
                
            
        </Card>
    );
  }
}

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps)
)(ViewOne);
