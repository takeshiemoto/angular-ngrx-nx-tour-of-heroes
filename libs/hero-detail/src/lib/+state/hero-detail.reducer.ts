import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroDetailActions from './hero-detail.actions';
import { HeroDetailEntity } from './hero-detail.models';

export const HERODETAIL_FEATURE_KEY = 'heroDetail';

export interface State extends EntityState<HeroDetailEntity> {
  selectedId?: string | number; // which HeroDetail record has been selected
  loaded: boolean; // has the HeroDetail list been loaded
  error?: string | null; // last none error (if any)
}

export interface HeroDetailPartialState {
  readonly [HERODETAIL_FEATURE_KEY]: State;
}

export const heroDetailAdapter: EntityAdapter<
  HeroDetailEntity
> = createEntityAdapter<HeroDetailEntity>();

export const initialState: State = heroDetailAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const heroDetailReducer = createReducer(
  initialState,
  on(HeroDetailActions.loadHeroDetail, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(HeroDetailActions.loadHeroDetailSuccess, (state, { heroDetail }) =>
    heroDetailAdapter.addAll(heroDetail, { ...state, loaded: true })
  ),
  on(HeroDetailActions.loadHeroDetailFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroDetailReducer(state, action);
}
