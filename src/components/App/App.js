import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import ViewOne from '../ViewOne/ViewOne';
import ViewTwo from '../ViewTwo/ViewTwo';
import ViewThree from '../ViewThree/ViewThree';
import ViewFour from '../ViewFour/ViewFour';
import ViewFive from '../ViewFive/ViewFive';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />
            <Route exact path='/' component={ViewOne}/>
            <Route exact path='/2' component={ViewTwo}/>
            <Route exact path='/3' component={ViewThree}/>
            <Route exact path='/4' component={ViewFour}/>
            <Route exact path='/5' component={ViewFive}/>
            <Route exact path='/admin' component={Admin}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
