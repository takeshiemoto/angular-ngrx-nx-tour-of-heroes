import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeroDetailComponent } from './cotainers/hero-detail/hero-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHeroDetail from './+state/hero-detail.reducer';
import { HeroDetailEffects } from './+state/hero-detail.effects';
import { HeroDetailFacade } from './+state/hero-detail.facade';

export const heroDetailRoutes: Route[] = [
  {
    path: '',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroDetailRoutes),
    StoreModule.forFeature(
      fromHeroDetail.HERODETAIL_FEATURE_KEY,
      fromHeroDetail.reducer
    ),
    EffectsModule.forFeature([HeroDetailEffects])
  ],
  declarations: [HeroDetailComponent],
  providers: [HeroDetailFacade]
})
export class HeroDetailModule {}
