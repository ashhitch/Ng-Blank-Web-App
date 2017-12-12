import * as fromUi from './shared/store/reducers/ui.reducer';

import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import { ActionReducerMap } from '@ngrx/store/store';

export interface AppState {
  ui: fromUi.UiState;
}


export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer
};
