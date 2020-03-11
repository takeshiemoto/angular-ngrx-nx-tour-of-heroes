import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HeroListEffects } from './hero-list.effects';
import * as HeroListActions from './hero-list.actions';

describe('HeroListEffects', () => {
  let actions: Observable<any>;
  let effects: HeroListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HeroListEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(HeroListEffects);
  });

  describe('loadHeroList$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HeroListActions.loadHeroList() });

      const expected = hot('-a-|', {
        a: HeroListActions.loadHeroListSuccess({ heroList: [] })
      });

      expect(effects.loadHeroList$).toBeObservable(expected);
    });
  });
});
