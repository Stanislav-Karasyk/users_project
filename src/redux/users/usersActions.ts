import * as type from './usersTypes';

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchUsersRequest = <T>(): IAction<T> => ({
  type: type.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersError = <T>(data: T): IAction<T> => ({
  type: type.FETCH_USERS_ERROR,
  payload: data,
});