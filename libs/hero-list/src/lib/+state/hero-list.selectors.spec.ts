import { State, heroListAdapter, initialState } from './hero-list.reducer';
import * as HeroListSelectors from './hero-list.selectors';
import { Hero } from '@angular-ngrx-nx-tour-of-heroes/api';

describe('HeroList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHeroListId = it => it['id'];
  const createHeroListEntity = (id: string, name = '') => ({
    id,
    name: name || `name-${id}`
  });

  let state;

  beforeEach(() => {
    state = {
      heroList: heroListAdapter.addAll(
        [
          createHeroListEntity('PRODUCT-AAA'),
          createHeroListEntity('PRODUCT-BBB'),
          createHeroListEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('HeroList Selectors', () => {
    it('getAllHeroList() should return the list of HeroList', () => {
      const results = HeroListSelectors.getAllHeroList(state);
      const selId = getHeroListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HeroListSelectors.getSelected(state);
      const selId = getHeroListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHeroListLoaded() should return the current 'loaded' status", () => {
      const result = HeroListSelectors.getHeroListLoaded(state);

      expect(result).toBe(true);
    });

    it("getHeroListError() should return the current 'error' state", () => {
      const result = HeroListSelectors.getHeroListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
