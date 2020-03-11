import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HEROLIST_FEATURE_KEY,
  State,
  HeroListPartialState,
  heroListAdapter
} from './hero-list.reducer';

// Lookup the 'HeroList' feature state managed by NgRx
export const getHeroListState = createFeatureSelector<
  HeroListPartialState,
  State
>(HEROLIST_FEATURE_KEY);

const { selectAll, selectEntities } = heroListAdapter.getSelectors();

export const getHeroListLoaded = createSelector(
  getHeroListState,
  (state: State) => state.loaded
);

export const getHeroListError = createSelector(
  getHeroListState,
  (state: State) => state.error
);

export const getAllHeroList = createSelector(
  getHeroListState,
  (state: State) => selectAll(state)
);

export const getHeroListEntities = createSelector(
  getHeroListState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getHeroListState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getHeroListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
