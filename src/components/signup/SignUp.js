import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setPassword('');
      setEmail('');
      setDisplayName('');
      setConfirmPassword('');
    } catch (error) {}
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={(event) => setDisplayName(event.target.value)}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={(event) => setConfirmPassword(event.target.value)}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>Submit Form</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
