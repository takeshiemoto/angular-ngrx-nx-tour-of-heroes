import { HeroListEntity } from './hero-list.models';
import * as HeroListActions from './hero-list.actions';
import { State, initialState, reducer } from './hero-list.reducer';

describe('HeroList Reducer', () => {
  const createHeroListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroListEntity);

  beforeEach(() => {});

  describe('valid HeroList actions', () => {
    it('loadHeroListSuccess should return set the list of known HeroList', () => {
      const heroList = [
        createHeroListEntity('PRODUCT-AAA'),
        createHeroListEntity('PRODUCT-zzz')
      ];
      const action = HeroListActions.loadHeroListSuccess({ heroList });

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
