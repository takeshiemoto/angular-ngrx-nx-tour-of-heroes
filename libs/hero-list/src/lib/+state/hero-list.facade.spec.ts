import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HeroListEntity } from './hero-list.models';
import { HeroListEffects } from './hero-list.effects';
import { HeroListFacade } from './hero-list.facade';

import * as HeroListSelectors from './hero-list.selectors';
import * as HeroListActions from './hero-list.actions';
import {
  HEROLIST_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './hero-list.reducer';

interface TestSchema {
  heroList: State;
}

describe('HeroListFacade', () => {
  let facade: HeroListFacade;
  let store: Store<TestSchema>;
  const createHeroListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroListEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HEROLIST_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HeroListEffects])
        ],
        providers: [HeroListFacade]
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
      facade = TestBed.get(HeroListFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allHeroList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(HeroListActions.loadHeroList());

        list = await readFirst(facade.allHeroList$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadHeroListSuccess` to manually update list
     */
    it('allHeroList$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allHeroList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          HeroListActions.loadHeroListSuccess({
            heroList: [createHeroListEntity('AAA'), createHeroListEntity('BBB')]
          })
        );

        list = await readFirst(facade.allHeroList$);
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
