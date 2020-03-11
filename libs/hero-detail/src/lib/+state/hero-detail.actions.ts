import { createAction, props } from '@ngrx/store';
import { HeroDetailEntity } from './hero-detail.models';

export const loadHeroDetail = createAction('[HeroDetail] Load HeroDetail');

export const loadHeroDetailSuccess = createAction(
  '[HeroDetail] Load HeroDetail Success',
  props<{ heroDetail: HeroDetailEntity[] }>()
);

export const loadHeroDetailFailure = createAction(
  '[HeroDetail] Load HeroDetail Failure',
  props<{ error: any }>()
);
