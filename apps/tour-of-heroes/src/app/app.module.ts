import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
        path: 'hero-list',
        loadChildren: () =>
          import('@angular-ngrx-nx-tour-of-heroes/hero-list').then(
            m => m.HeroListModule
          )
      },
      {
        path: 'hero-list/:id',
        loadChildren: () =>
          import('@angular-ngrx-nx-tour-of-heroes/hero-detail').then(
            m => m.HeroDetailModule
          )
      }
    ]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          // TODO 一時的にfalseにしたNGRXのバージョンアップで解消予定
          // https://github.com/ngrx/platform/issues/2404
          strictActionImmutability: false,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
