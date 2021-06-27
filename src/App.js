import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './containers/ShopPage/ShopPage';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;