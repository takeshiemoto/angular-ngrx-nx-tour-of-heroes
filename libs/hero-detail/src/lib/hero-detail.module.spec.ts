import { async, TestBed } from '@angular/core/testing';
import { HeroDetailModule } from './hero-detail.module';

describe('HeroDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeroDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HeroDetailModule).toBeDefined();
  });
});
