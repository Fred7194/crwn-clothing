import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDSJqaiU_qKcTMC2tR4QBIv5DkJlfgUKRg',
  authDomain: 'crwn-db-c9db1.firebaseapp.com',
  projectId: 'crwn-db-c9db1',
  storageBucket: 'crwn-db-c9db1.appspot.com',
  messagingSenderId: '10681856290',
  appId: '1:10681856290:web:5eb16493ce1e5e4bfdb57b',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
