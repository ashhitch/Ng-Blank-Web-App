import { Action } from '@ngrx/store';
import { Type } from '@angular/core';

export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';


export class ShowSidebar implements Action {
  readonly type = SHOW_SIDEBAR;
}

export class HideSidebar implements Action {
  readonly type = HIDE_SIDEBAR;
}

export class ToggleSidebar implements Action {
  readonly type = TOGGLE_SIDEBAR;
}

export type UiActions
= ShowSidebar
| HideSidebar
| ToggleSidebar;
