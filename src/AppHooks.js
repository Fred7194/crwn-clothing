import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import userReducer from './redux/user/userReducer';

const AppHooks = () => {
  const dispatch = useDispatch(userReducer);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(authUser));
    });
    return () => {
      console.log('cleanup');
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default AppHooks;
