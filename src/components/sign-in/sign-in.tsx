import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/form-input";
import { SignInContainer, ButtonsContainer, H2 } from './sign-in.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { signInWithGooglePopup }
  from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { emailSignInStart } from "../../store/user/user.action";

const SinInForm = () => {
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({ email: '', password: '' })
  const { email, password } = userForm;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password))
      setUserForm({ email: '', password: '' })
    } catch (error) {
      console.log('User sign in failed', error)
    }
  }

  return (
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
