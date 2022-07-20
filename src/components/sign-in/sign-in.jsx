import { useState } from "react";
import FormInput from "../form-input/form-input";
import './sign-in.styles.scss';
import Button from "../button/button";
import { createUserDocumentFromAuth,
   signInWithEmailAndPasswordAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SinInForm = () => {
  const [userForm, setUserForm] = useState({ email:'', password:''})
  const { email, password} = userForm;

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
     await createUserDocumentFromAuth(user)
  }


  const handleChange = (event) => {
    const {name, value} = event.target;

    setUserForm({...userForm, [name]:value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      if(email && password) {
        console.log(email, password)
        return await signInWithEmailAndPasswordAuth(email, password)
      }
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error.message)
      }
    }
    setUserForm({ email:'', password:''})
  }

  return(
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" required type='email' onChange={handleChange} value={email} />

        <FormInput label="Password" name="password" required type='password' onChange={handleChange} value={password} />
        <div className="buttons-container" >
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={'google'} onClick={signInWithGoogle} >Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SinInForm
