import { createAction, props } from '@ngrx/store';
import { HeroListEntity } from './hero-list.models';

export const loadHeroList = createAction('[HeroList] Load HeroList');

export const loadHeroListSuccess = createAction(
  '[HeroList] Load HeroList Success',
  props<{ heroList: HeroListEntity[] }>()
);

export const loadHeroListFailure = createAction(
  '[HeroList] Load HeroList Failure',
  props<{ error: any }>()
);
