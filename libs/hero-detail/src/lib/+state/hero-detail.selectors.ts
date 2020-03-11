import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HERODETAIL_FEATURE_KEY,
  State,
  HeroDetailPartialState,
  heroDetailAdapter
} from './hero-detail.reducer';

// Lookup the 'HeroDetail' feature state managed by NgRx
export const getHeroDetailState = createFeatureSelector<
  HeroDetailPartialState,
  State
>(HERODETAIL_FEATURE_KEY);

const { selectAll, selectEntities } = heroDetailAdapter.getSelectors();

export const getHeroDetailLoaded = createSelector(
  getHeroDetailState,
  (state: State) => state.loaded
);

export const getHeroDetailError = createSelector(
  getHeroDetailState,
  (state: State) => state.error
);

export const getAllHeroDetail = createSelector(
  getHeroDetailState,
  (state: State) => selectAll(state)
);

export const getHeroDetailEntities = createSelector(
  getHeroDetailState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getHeroDetailState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getHeroDetailEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
