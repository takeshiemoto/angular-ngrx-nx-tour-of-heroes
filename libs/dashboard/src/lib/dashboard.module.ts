import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashbaordComponent } from './containers/dashbaord/dashbaord.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardFacade } from './+state/dashboard.facade';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashbaordComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.reducer
    ),
    EffectsModule.forFeature([DashboardEffects])
  ],
  declarations: [DashbaordComponent],
  providers: [DashboardFacade]
})
export class DashboardModule {}
