import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromHeroList from './hero-list.reducer';
import * as HeroListActions from './hero-list.actions';
import { HeroListService } from '../hero-list.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroListEffects {
  loadHeroList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroListActions.loadHeroList),
      fetch({
        run: action => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.heroListService
            .getHeroes()
            .pipe(
              map(heroList => HeroListActions.loadHeroListSuccess({ heroList }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return HeroListActions.loadHeroListFailure({ error });
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private heroListService: HeroListService
  ) {}
}
