import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromHeroes from './heroes.reducer';
import * as HeroesSelectors from './heroes.selectors';

@Injectable()
export class HeroesFacade {
  loaded$ = this.store.pipe(select(HeroesSelectors.getHeroesLoaded));
  allHeroes$ = this.store.pipe(select(HeroesSelectors.getAllHeroes));
  selectedHeroes$ = this.store.pipe(select(HeroesSelectors.getSelected));

  constructor(private store: Store<fromHeroes.HeroesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
