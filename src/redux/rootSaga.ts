import { all } from 'redux-saga/effects';
import { usersWatcher } from './users/usersSagas';

export function* rootSaga() {
  yield all([usersWatcher()]);
}
