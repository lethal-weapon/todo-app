import React from 'react';
import {Header} from './components/Header';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {Done} from './components/Done';
import {Help} from './components/Help';
import {Business} from './components/Business';
import {Navigation} from './components/Navigation';

export default function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Switch>
        <Route path="/" exact={true} component={Business}/>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/done" exact={true} component={Done}/>
        <Route path="/help" exact={true} component={Help}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}
