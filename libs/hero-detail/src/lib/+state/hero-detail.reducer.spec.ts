import { HeroDetailEntity } from './hero-detail.models';
import * as HeroDetailActions from './hero-detail.actions';
import { State, initialState, reducer } from './hero-detail.reducer';

describe('HeroDetail Reducer', () => {
  const createHeroDetailEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroDetailEntity);

  beforeEach(() => {});

  describe('valid HeroDetail actions', () => {
    it('loadHeroDetailSuccess should return set the list of known HeroDetail', () => {
      const heroDetail = [
        createHeroDetailEntity('PRODUCT-AAA'),
        createHeroDetailEntity('PRODUCT-zzz')
      ];
      const action = HeroDetailActions.loadHeroDetailSuccess({ heroDetail });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
