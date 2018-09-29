import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  selectedHero: Hero;

  heroes = HEROES;

  constructor() { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
