import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { compose } from 'redux';

// Material-UI imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const styles = {

}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class FeedbackItem extends Component {
    
    getFeedbackItemsFromDatabase() {
        console.log('in axios GET db');
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            const action = {type: 'SET_FEEDBACK', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error in GET:', error);
        }) // end axios GET
    } // end getFeedbackItemsFromDatabase
    //same GET code from Admin.js, but this solves async issues

    deleteFeedback = () => {
        console.log('in DELETE to delete:', this.props.feedback.id);
        let prompt = window.confirm('Are you sure you want to delete?');
        if(prompt) {
            axios.delete(`/feedback/${this.props.feedback.id}`)
                .then((response) => {
                    this.getFeedbackItemsFromDatabase();
                }).catch((error) => {
                    console.log('error in DELETE', error);
                }) // end axios DELETE
        } // end prompt
    } // end deleteFeedback

    flagFeedback = () => {
        console.log('in flagFeedback', this.props.feedback);
        axios.put(`/feedback/${this.props.feedback.id}/${this.props.feedback.flagged}`)
            .then((response) => {
                this.getFeedbackItemsFromDatabase();
            }).catch((error) => {
                console.log('error in PUT', error);
            })
    }

    render() {
        return (
                <TableRow>
                    <TableCell>{this.props.feedback.feeling}</TableCell>
                    <TableCell>{this.props.feedback.understanding}</TableCell>
                    <TableCell>{this.props.feedback.support}</TableCell>
                    <TableCell>{this.props.feedback.comments}</TableCell>
                    <TableCell><Button onClick={this.deleteFeedback}>Delete</Button></TableCell>
                    <TableCell><Button onClick={this.flagFeedback}>Flag</Button></TableCell>
                </TableRow>
        ); // end return

    } // end render
} // end FeedbackItem

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps)
)(FeedbackItem);