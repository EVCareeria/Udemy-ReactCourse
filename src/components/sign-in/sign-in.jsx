import { useState } from "react";
import FormInput from "../form-input/form-input";
import {SignInContainer, ButtonsContainer, H2} from './sign-in.styles.js';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } 
from "../../utils/firebase/firebase.utils";

const SinInForm = () => {
  const [userForm, setUserForm] = useState({ email:'', password:''})
  const { email, password} = userForm;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserForm({...userForm, [name]:value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error)
      }
    }
    setUserForm({ email:'', password:''})
  }

  return(
    <SignInContainer>
      <H2>Already have an account?</H2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" required type='email' onChange={handleChange} value={email} />

        <FormInput label="Password" name="password" required type='password' onChange={handleChange} value={password} />
        <ButtonsContainer>
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SinInForm
