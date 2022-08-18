import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/form-input";
import { SignUpContainer, H2 } from './sign-up.styles';
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const SignUpForm = () => {
  const [userForm, setUserForm] = useState({ displayName: '', email: '', password: '', passwordConf: '' })
  const { displayName, email, password, passwordConf } = userForm;
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserForm({ ...userForm, [name]: value })
    console.log(userForm)
  }

  const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConf) return;

    try {
      dispatch(signUpStart(email, password, displayName))
      setUserForm({ displayName: '', email: '', password: '', passwordConf: '' })
    } catch (error) {
      console.log('Something went wrong when signing up', error)
    }

  }

  return (
    <SignUpContainer>
      <H2>Don't have an account?</H2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display name" name="displayName" required type='text' onChange={handleChange} value={displayName} />

        <FormInput label="Email" name="email" required type='email' onChange={handleChange} value={email} />

        <FormInput label="Password" name="password" required type='password' onChange={handleChange} value={password} />

        <FormInput label="ConfirmPassword" name="passwordConf" required type='password' onChange={handleChange} value={passwordConf} />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm
