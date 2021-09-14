import { React, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentUser } from './counterSlice';
import { setCurrentUser } from './features/currentUser/currentUserSlice';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './containers/ShopPage/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      dispatch(null);
      // setCurrentUser({ userAuth });
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, []);
  // console.log(currentUser);

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