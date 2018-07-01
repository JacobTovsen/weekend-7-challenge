import React, { Component } from 'react';

// Material-UI imports
import { withStyles } from '@material-ui/core/styles';
const styles = {

}

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </div>

        ); // end return 
    } // end render
} // end Admin

export default withStyles(styles)(Header);