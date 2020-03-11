import { HeroDetailEntity } from './hero-detail.models';
import { State, heroDetailAdapter, initialState } from './hero-detail.reducer';
import * as HeroDetailSelectors from './hero-detail.selectors';

describe('HeroDetail Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHeroDetailId = it => it['id'];
  const createHeroDetailEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroDetailEntity);

  let state;

  beforeEach(() => {
    state = {
      heroDetail: heroDetailAdapter.addAll(
        [
          createHeroDetailEntity('PRODUCT-AAA'),
          createHeroDetailEntity('PRODUCT-BBB'),
          createHeroDetailEntity('PRODUCT-CCC')
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

  describe('HeroDetail Selectors', () => {
    it('getAllHeroDetail() should return the list of HeroDetail', () => {
      const results = HeroDetailSelectors.getAllHeroDetail(state);
      const selId = getHeroDetailId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HeroDetailSelectors.getSelected(state);
      const selId = getHeroDetailId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHeroDetailLoaded() should return the current 'loaded' status", () => {
      const result = HeroDetailSelectors.getHeroDetailLoaded(state);

      expect(result).toBe(true);
    });

    it("getHeroDetailError() should return the current 'error' state", () => {
      const result = HeroDetailSelectors.getHeroDetailError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
