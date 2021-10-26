import './App.css'
import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import Home from '../src/screens/Home'
import Search from '../src/screens/Search'
import Favourites from '../src/screens/Favourites'
import Account from '../src/screens/Account'
import Add from '../src/screens/Add'

class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/add' component={Add} />
      <Route exact path='/favourites' component={Favourites} />
      <Route exact path='/account' component={Account} />
    </Router>
    );
  }
}
export default App;
