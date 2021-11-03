import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {loadData} from "./store/actions/TodoAction";
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Done} from './components/Done';
import {Help} from './components/Help';
import {Business} from './components/Business';
import {Navigation} from './components/Navigation';
import {StoreVisualizer} from "./components/StoreVisualizer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

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
      <StoreVisualizer/>
    </Router>
  );
}
