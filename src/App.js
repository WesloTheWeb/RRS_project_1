import { React, useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { auth } from './firebase/firebase.utils';
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './containers/ShopPage/ShopPage';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [unsubscribe, setUnsubscribe] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(currentUser = user);
      console.log(user);
    });
 
    setUnsubscribe(unsubscribeFromAuth);
    
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;