import * as UiActions from '../actions/ui.actions';

import { Action, State } from '@ngrx/store';

export type Action = UiActions.UiActions;

export interface UiState {
  sidebarActive: boolean;
}

const initialState: UiState = {
  sidebarActive: true
};

export function uiReducer(state = initialState, action: Action) {
  switch (action.type) {
    case UiActions.SHOW_SIDEBAR:
      return {
        ...state,
        sidebarActive: true
      };
    case UiActions.HIDE_SIDEBAR:
      return {
        ...state,
        sidebarActive: false
      };
    case UiActions.TOGGLE_SIDEBAR:
      const togSide = !state.sidebarActive;
      return {
        ...state,
        sidebarActive: togSide
      };

    default:
      return state;
  }
}
