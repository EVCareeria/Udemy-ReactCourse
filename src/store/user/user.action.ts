import { login, USER_ACTION_TYPES } from './user.types';
import { createAction,ActionWithPayload, Action, withMatcher } from '../../utils/reducer/reducer.utils';
import { AddiitionalInformation, UserData } from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

/*
CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'

*/
export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type setCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export type googleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>

export type emailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, login>
export type signInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type signInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>
export type signUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, login>
export type signUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,
 {user:User; additionalDetails:AddiitionalInformation}>

export type signUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, UserData>
export type signOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type signOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type signOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>


export const setCurrentUser = withMatcher((user:UserData):setCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const checkUserSession = withMatcher(() =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatcher((email:string, password:string):emailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user:UserData & {id:string}) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error:Error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withMatcher((email:string, password:string, displayName:string):signUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));

export const signUpSuccess = withMatcher((user:User, additionalDetails:AddiitionalInformation):signUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signUpFailed = withMatcher((error:Error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error:Error):signOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
