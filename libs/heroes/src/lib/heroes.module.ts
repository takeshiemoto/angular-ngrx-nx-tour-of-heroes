import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeroesComponent } from './containers/heroes/heroes.component';

export const heroesRoutes: Route[] = [
  {
    path: '',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(heroesRoutes)],
  declarations: [HeroesComponent]
})
export class HeroesModule {}
