import { async, TestBed } from '@angular/core/testing';
import { HeroesModule } from './heroes.module';

describe('HeroesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeroesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HeroesModule).toBeDefined();
  });
});
