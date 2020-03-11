import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroListActions from './hero-list.actions';
import { HeroListEntity } from './hero-list.models';

export const HEROLIST_FEATURE_KEY = 'heroList';

export interface State extends EntityState<HeroListEntity> {
  selectedId?: string | number; // which HeroList record has been selected
  loaded: boolean; // has the HeroList list been loaded
  error?: string | null; // last none error (if any)
}

export interface HeroListPartialState {
  readonly [HEROLIST_FEATURE_KEY]: State;
}

export const heroListAdapter: EntityAdapter<
  HeroListEntity
> = createEntityAdapter<HeroListEntity>();

export const initialState: State = heroListAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const heroListReducer = createReducer(
  initialState,
  on(HeroListActions.loadHeroList, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(HeroListActions.loadHeroListSuccess, (state, { heroList }) =>
    heroListAdapter.addAll(heroList, { ...state, loaded: true })
  ),
  on(HeroListActions.loadHeroListFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroListReducer(state, action);
}
