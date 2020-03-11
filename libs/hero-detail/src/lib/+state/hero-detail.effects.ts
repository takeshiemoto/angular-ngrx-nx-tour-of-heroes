import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromHeroDetail from './hero-detail.reducer';
import * as HeroDetailActions from './hero-detail.actions';

@Injectable()
export class HeroDetailEffects {
  loadHeroDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroDetailActions.loadHeroDetail),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return HeroDetailActions.loadHeroDetailSuccess({ heroDetail: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return HeroDetailActions.loadHeroDetailFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
