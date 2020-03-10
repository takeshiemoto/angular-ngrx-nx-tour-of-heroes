import { HeroesEntity } from './heroes.models';
import { State, heroesAdapter, initialState } from './heroes.reducer';
import * as HeroesSelectors from './heroes.selectors';

describe('Heroes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHeroesId = it => it['id'];
  const createHeroesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroesEntity);

  let state;

  beforeEach(() => {
    state = {
      heroes: heroesAdapter.addAll(
        [
          createHeroesEntity('PRODUCT-AAA'),
          createHeroesEntity('PRODUCT-BBB'),
          createHeroesEntity('PRODUCT-CCC')
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

  describe('Heroes Selectors', () => {
    it('getAllHeroes() should return the list of Heroes', () => {
      const results = HeroesSelectors.getAllHeroes(state);
      const selId = getHeroesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HeroesSelectors.getSelected(state);
      const selId = getHeroesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHeroesLoaded() should return the current 'loaded' status", () => {
      const result = HeroesSelectors.getHeroesLoaded(state);

      expect(result).toBe(true);
    });

    it("getHeroesError() should return the current 'error' state", () => {
      const result = HeroesSelectors.getHeroesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
