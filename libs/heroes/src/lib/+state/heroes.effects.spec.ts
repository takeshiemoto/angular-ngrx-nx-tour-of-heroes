import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HeroesEffects } from './heroes.effects';
import * as HeroesActions from './heroes.actions';

describe('HeroesEffects', () => {
  let actions: Observable<any>;
  let effects: HeroesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HeroesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(HeroesEffects);
  });

  describe('loadHeroes$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HeroesActions.loadHeroes() });

      const expected = hot('-a-|', {
        a: HeroesActions.loadHeroesSuccess({ heroes: [] })
      });

      expect(effects.loadHeroes$).toBeObservable(expected);
    });
  });
});
