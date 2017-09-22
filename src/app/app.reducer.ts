/* tslint:disable:typedef */

// import {combineReducers, Reducer} from 'redux';
import * as Redux from 'redux';

import {UsersReducer, UsersState} from './user/users.reducer';
export * from './user/users.reducer';
import {ThreadsReducer, ThreadsState} from './thread/threads.reducer';
export * from './thread/threads.reducer';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Redux.Reducer<AppState> = Redux.combineReducers<AppState> ({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default rootReducer;
