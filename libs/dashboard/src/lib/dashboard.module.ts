import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashbaordComponent } from './containers/dashbaord/dashbaord.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashbaordComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
  declarations: [DashbaordComponent]
})
export class DashboardModule {}
