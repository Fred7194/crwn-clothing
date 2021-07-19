import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    setPassword('');
    setEmail('');
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={submitHandler}>
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
          label='password'
          required
        />

        <CustomButton type='submit'>Submit Form</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
