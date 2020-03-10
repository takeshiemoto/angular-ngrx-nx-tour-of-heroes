import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroesActions from './heroes.actions';
import { HeroesEntity } from './heroes.models';

export const HEROES_FEATURE_KEY = 'heroes';

export interface State extends EntityState<HeroesEntity> {
  selectedId?: string | number; // which Heroes record has been selected
  loaded: boolean; // has the Heroes list been loaded
  error?: string | null; // last none error (if any)
}

export interface HeroesPartialState {
  readonly [HEROES_FEATURE_KEY]: State;
}

export const heroesAdapter: EntityAdapter<HeroesEntity> = createEntityAdapter<
  HeroesEntity
>();

export const initialState: State = heroesAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.loadHeroes, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(HeroesActions.loadHeroesSuccess, (state, { heroes }) =>
    heroesAdapter.addAll(heroes, { ...state, loaded: true })
  ),
  on(HeroesActions.loadHeroesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroesReducer(state, action);
}
