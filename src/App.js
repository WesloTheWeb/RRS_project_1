import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;