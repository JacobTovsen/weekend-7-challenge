import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';
import { compose } from 'redux';

// Material-UI imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const styles = {

}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Admin extends Component {

    componentDidMount() {
        this.getFeedbackItemsFromDatabase();
        console.log(this.props.reduxStore.databaseReducer);
    }

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

    render() {
        return (
            <div>
                <div>
                    <p>Admin View</p>
                </div>
                <div>
                    {/* <Paper> */}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Feeling</TableCell>
                                    <TableCell>Comprehension</TableCell>
                                    <TableCell>Support</TableCell>
                                    <TableCell>Comments</TableCell>
                                    <TableCell>Delete</TableCell>
                                    <TableCell>Flag</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxStore.databaseReducer.map((feedback) => {
                            return <FeedbackItem
                            key = {feedback.id}
                            feedback = {feedback}
                            getFeedbackItemsFromDatabase = {this.getFeedbackItemsFromDatabase}
                            />
                                })}
                            </TableBody>
                        </Table>
                    {/* </Paper> */}
                </div>
            </div>

        ); // end return 
    } // end render
} // end Admin

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps)
)(Admin);