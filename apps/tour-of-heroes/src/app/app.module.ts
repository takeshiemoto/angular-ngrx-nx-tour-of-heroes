import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@angular-ngrx-nx-tour-of-heroes/dashboard').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'heroes',
        loadChildren: () =>
          import('@angular-ngrx-nx-tour-of-heroes/heroes').then(
            m => m.HeroesModule
          )
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
