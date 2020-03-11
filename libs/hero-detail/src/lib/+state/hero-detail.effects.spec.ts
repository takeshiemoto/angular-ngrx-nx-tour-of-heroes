import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HeroDetailEffects } from './hero-detail.effects';
import * as HeroDetailActions from './hero-detail.actions';

describe('HeroDetailEffects', () => {
  let actions: Observable<any>;
  let effects: HeroDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HeroDetailEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(HeroDetailEffects);
  });

  describe('loadHeroDetail$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HeroDetailActions.loadHeroDetail() });

      const expected = hot('-a-|', {
        a: HeroDetailActions.loadHeroDetailSuccess({ heroDetail: [] })
      });

      expect(effects.loadHeroDetail$).toBeObservable(expected);
    });
  });
});
