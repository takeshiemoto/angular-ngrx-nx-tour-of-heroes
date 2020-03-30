import { createAction, props } from '@ngrx/store';
import { Hero } from '@angular-ngrx-nx-tour-of-heroes/api';

export const loadHeroList = createAction('[HeroList] Load HeroList');

export const loadHeroListSuccess = createAction(
  '[HeroList] Load HeroList Success',
  props<{ heroList: Hero[] }>()
);

export const loadHeroListFailure = createAction(
  '[HeroList] Load HeroList Failure',
  props<{ error: any }>()
);
