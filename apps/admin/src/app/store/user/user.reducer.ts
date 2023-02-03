import { AnyAction } from "redux";

import { User } from "@admin/gql/graphql";

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  signInStart,
  signOutStart,
  checkUserSessionFailed,
  checkUserSessionSuccess,
} from "./user.action";

export type UserState = {
  readonly currentUser: Partial<User> | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (signInStart.match(action) || signOutStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (signInSuccess.match(action) || checkUserSessionSuccess.match(action)) {
    return { ...state, currentUser: action.payload, isLoading: false };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null, isLoading: false };
  }

  if (signOutFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  if (signInFailed.match(action) || checkUserSessionFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
      currentUser: null,
    };
  }

  return state;
};
