import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';

import Header from './components/Header/Header';
import { useSelector } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

const AppHooks = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
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
      } else {
        dispatch(setCurrentUser(authUser));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' exact component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => (user ? <Redirect to='/' /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  );
};

export default AppHooks;
