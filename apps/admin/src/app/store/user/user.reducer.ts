import { AnyAction } from "redux";

import { User } from "@admin/gql/graphql";

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: User | null;
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
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (signOutFailed.match(action) || signInFailed.match(action)) {
    return { ...state, error: action.payload };
  }

  return state;
};
