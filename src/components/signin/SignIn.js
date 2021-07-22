import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label='password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
