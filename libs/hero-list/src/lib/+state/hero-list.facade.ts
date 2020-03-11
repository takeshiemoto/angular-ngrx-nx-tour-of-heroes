import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromHeroList from './hero-list.reducer';
import * as HeroListSelectors from './hero-list.selectors';

@Injectable()
export class HeroListFacade {
  loaded$ = this.store.pipe(select(HeroListSelectors.getHeroListLoaded));
  allHeroList$ = this.store.pipe(select(HeroListSelectors.getAllHeroList));
  selectedHeroList$ = this.store.pipe(select(HeroListSelectors.getSelected));

  constructor(private store: Store<fromHeroList.HeroListPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
