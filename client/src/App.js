import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import UserPage from './components/UserPage/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/signup" component={SignUp} />
            <Route path="/user" component={UserPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
