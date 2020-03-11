import { async, TestBed } from '@angular/core/testing';
import { HeroListModule } from './hero-list.module';

describe('HeroListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeroListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HeroListModule).toBeDefined();
  });
});
