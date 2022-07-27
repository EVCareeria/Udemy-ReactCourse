import { useState } from "react";
import FormInput from "../form-input/form-input";
import { SignUpContainer, H2 } from './sign-up.styles.js';
import Button from "../button/button";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
  const [userForm, setUserForm] = useState({displayName:'', email:'', password:'', passwordConf:''})
  const {displayName, email, password, passwordConf} = userForm;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setUserForm({...userForm, [name]:value})
    console.log(userForm)
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    if(password !== passwordConf) return;
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, {displayName});
      setUserForm({displayName:'', email:'', password:'', passwordConf:''})
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
      console.log(error)
    }
  }

  return(
    <SignUpContainer>
      <H2>Don't have an account?</H2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display name" name="displayName"  required type='text' onChange={handleChange} value={displayName} />

        <FormInput label="Email" name="email" required type='email' onChange={handleChange} value={email} />

        <FormInput label="Password" name="password" required type='password' onChange={handleChange} value={password} />

        <FormInput label="ConfirmPassword" name="passwordConf" required type='password' onChange={handleChange} value={passwordConf}/>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm
