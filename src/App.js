import { React, useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './containers/ShopPage/ShopPage';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  let [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      // createUserProfileDocument(user)
      // console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(currentUser = userAuth);
      console.log(currentUser);

    });

    return () => {
      unsubscribeFromAuth();

    }
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
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