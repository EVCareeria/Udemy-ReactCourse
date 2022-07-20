import {signInWithGooglePopup,
   createUserDocumentFromAuth,
   signInWithEmailAndPasswordAuth,
  } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up/sign-up';
import SignInForm from '../../components/sign-in/sign-in';
import Button from '../../components/button/button';
import { useState } from 'react';
import './authentication.styles.scss';
import FormInput from '../../components/form-input/form-input';


const SignIn = () => {
  const [userInfo, setUserInfo] = useState({email:'', password:''})


  const handleChange = (event) => {
    const {name, value} = event.target;

    setUserInfo({...userInfo, [name]:value})
    console.log(userInfo)
  }
  
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default SignIn
