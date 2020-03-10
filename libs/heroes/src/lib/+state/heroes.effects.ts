import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromHeroes from './heroes.reducer';
import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroesEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.loadHeroes),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return HeroesActions.loadHeroesSuccess({ heroes: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return HeroesActions.loadHeroesFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
