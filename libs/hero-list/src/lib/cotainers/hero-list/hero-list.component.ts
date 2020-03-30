import { Component, OnInit } from '@angular/core';
import { HeroListFacade } from '../../+state/hero-list.facade';

@Component({
  selector: 'angular-ngrx-nx-tour-of-heroes-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  readonly heroes$ = this.heroListFacade.allHeroList$;

  constructor(private heroListFacade: HeroListFacade) {}

  ngOnInit(): void {
    this.heroListFacade.getHeroes();
  }
}
