import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHeroList from './+state/hero-list.reducer';
import { HeroListEffects } from './+state/hero-list.effects';
import { HeroListFacade } from './+state/hero-list.facade';
import { HeroListComponent } from './cotainers/hero-list/hero-list.component';
import { HeroListService } from './hero-list.service';

export const heroListRoutes: Route[] = [
  {
    path: '',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroListRoutes),
    StoreModule.forFeature(
      fromHeroList.HEROLIST_FEATURE_KEY,
      fromHeroList.reducer
    ),
    EffectsModule.forFeature([HeroListEffects])
  ],
  providers: [HeroListFacade, HeroListService],
  declarations: [HeroListComponent]
})
export class HeroListModule {}
