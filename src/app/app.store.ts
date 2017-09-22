import {InjectionToken} from '@angular/core';
import * as Redux from 'redux';
// import {compose, createStore, Store, StoreEnhancer} from 'redux';

/**
 * Tetap saja Redux DevTools tidak dapat bekerja tapi
 * Program tidak ada yang error
 */

import { AppState, default as reducer } from './app.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: Redux.StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension'] () : f => f;

export function createAppStore(): Redux.Store<AppState> {
  return Redux.createStore<AppState>(
    reducer,
    Redux.compose(devtools)
  );
}

export const appStoreProviders = [
  {provide: AppStore, useFactory: createAppStore}
];
