import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import logo from './logo.svg';
import './App.css';
import Examples from './Examples/Examples';
import BtnNav from './BottomNav/BtnNav';
import SearchPage from './BottomNav/SearchPage';
import ProfilePage from './BottomNav/ProfilePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider>
            <AppBar
              title="Example"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
              <Switch>
                <Route exact path="/" component={Examples} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/profile" component={ProfilePage} />
              </Switch>
            <BtnNav/>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
