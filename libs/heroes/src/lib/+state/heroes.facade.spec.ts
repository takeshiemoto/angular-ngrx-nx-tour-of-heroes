import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HeroesEntity } from './heroes.models';
import { HeroesEffects } from './heroes.effects';
import { HeroesFacade } from './heroes.facade';

import * as HeroesSelectors from './heroes.selectors';
import * as HeroesActions from './heroes.actions';
import {
  HEROES_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './heroes.reducer';

interface TestSchema {
  heroes: State;
}

describe('HeroesFacade', () => {
  let facade: HeroesFacade;
  let store: Store<TestSchema>;
  const createHeroesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HEROES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HeroesEffects])
        ],
        providers: [HeroesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(HeroesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allHeroes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(HeroesActions.loadHeroes());

        list = await readFirst(facade.allHeroes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadHeroesSuccess` to manually update list
     */
    it('allHeroes$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allHeroes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          HeroesActions.loadHeroesSuccess({
            heroes: [createHeroesEntity('AAA'), createHeroesEntity('BBB')]
          })
        );

        list = await readFirst(facade.allHeroes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
