import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHeroes from './+state/heroes.reducer';
import { HeroesEffects } from './+state/heroes.effects';
import { HeroesFacade } from './+state/heroes.facade';

export const heroesRoutes: Route[] = [
  {
    path: '',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes),
    StoreModule.forFeature(fromHeroes.HEROES_FEATURE_KEY, fromHeroes.reducer),
    EffectsModule.forFeature([HeroesEffects])
  ],
  declarations: [HeroesComponent],
  providers: [HeroesFacade]
})
export class HeroesModule {}
