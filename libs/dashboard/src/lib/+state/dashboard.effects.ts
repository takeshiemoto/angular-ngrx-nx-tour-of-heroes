import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromDashboard from './dashboard.reducer';
import * as DashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboard),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DashboardActions.loadDashboardSuccess({ dashboard: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DashboardActions.loadDashboardFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
