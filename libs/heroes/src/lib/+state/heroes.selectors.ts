import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HEROES_FEATURE_KEY,
  State,
  HeroesPartialState,
  heroesAdapter
} from './heroes.reducer';

// Lookup the 'Heroes' feature state managed by NgRx
export const getHeroesState = createFeatureSelector<HeroesPartialState, State>(
  HEROES_FEATURE_KEY
);

const { selectAll, selectEntities } = heroesAdapter.getSelectors();

export const getHeroesLoaded = createSelector(
  getHeroesState,
  (state: State) => state.loaded
);

export const getHeroesError = createSelector(
  getHeroesState,
  (state: State) => state.error
);

export const getAllHeroes = createSelector(
  getHeroesState,
  (state: State) => selectAll(state)
);

export const getHeroesEntities = createSelector(
  getHeroesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getHeroesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getHeroesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
