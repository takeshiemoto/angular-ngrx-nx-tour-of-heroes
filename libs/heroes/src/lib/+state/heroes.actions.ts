import { createAction, props } from '@ngrx/store';
import { HeroesEntity } from './heroes.models';

export const loadHeroes = createAction('[Heroes] Load Heroes');

export const loadHeroesSuccess = createAction(
  '[Heroes] Load Heroes Success',
  props<{ heroes: HeroesEntity[] }>()
);

export const loadHeroesFailure = createAction(
  '[Heroes] Load Heroes Failure',
  props<{ error: any }>()
);
