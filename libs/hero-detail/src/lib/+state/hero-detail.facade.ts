import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromHeroDetail from './hero-detail.reducer';
import * as HeroDetailSelectors from './hero-detail.selectors';

@Injectable()
export class HeroDetailFacade {
  loaded$ = this.store.pipe(select(HeroDetailSelectors.getHeroDetailLoaded));
  allHeroDetail$ = this.store.pipe(
    select(HeroDetailSelectors.getAllHeroDetail)
  );
  selectedHeroDetail$ = this.store.pipe(
    select(HeroDetailSelectors.getSelected)
  );

  constructor(private store: Store<fromHeroDetail.HeroDetailPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
