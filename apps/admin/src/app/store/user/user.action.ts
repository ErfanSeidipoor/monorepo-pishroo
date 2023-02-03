import { User } from "@admin/gql/graphql";

import { USER_ACTION_TYPES } from "./user.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../reducer.utils";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type CheckUserSessionFailed = ActionWithPayload<
  USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED,
  Error
>;
export type CheckUserSessionSuccess = ActionWithPayload<
  USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS,
  Partial<User>
>;

export type SignInStart = Action<USER_ACTION_TYPES.SIGN_IN_START>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  Partial<User>
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const checkUserSessionFailed = withMatcher(
  (error: Error): CheckUserSessionFailed =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED, error)
);

export const checkUserSessionSuccess = withMatcher(
  (user: Partial<User>): CheckUserSessionSuccess =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_SUCCESS, user)
);

export const signInStart = withMatcher(
  (): SignInStart => createAction(USER_ACTION_TYPES.SIGN_IN_START)
);

export const signInSuccess = withMatcher(
  (user: Partial<User>): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
