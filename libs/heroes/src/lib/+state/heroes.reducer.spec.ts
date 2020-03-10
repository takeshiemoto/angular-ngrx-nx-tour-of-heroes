import { HeroesEntity } from './heroes.models';
import * as HeroesActions from './heroes.actions';
import { State, initialState, reducer } from './heroes.reducer';

describe('Heroes Reducer', () => {
  const createHeroesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HeroesEntity);

  beforeEach(() => {});

  describe('valid Heroes actions', () => {
    it('loadHeroesSuccess should return set the list of known Heroes', () => {
      const heroes = [
        createHeroesEntity('PRODUCT-AAA'),
        createHeroesEntity('PRODUCT-zzz')
      ];
      const action = HeroesActions.loadHeroesSuccess({ heroes });

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
