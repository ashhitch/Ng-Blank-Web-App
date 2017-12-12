import * as UiActions from '../../../shared/store/actions/ui.actions';
import * as fromApp from '../../../app.reducers';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private sub$: Subscription;
  private _active: boolean;

  get active() {
    return this._active;
  }

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.sub$ = this.store
      .select('ui')
      .subscribe(data => (this._active = data.sidebarActive));
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  toggleSidebar() {
    this.store.dispatch(new UiActions.ToggleSidebar());
  }
}
