import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  //Hier word hero component aangemaakt
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  
  heroes: Hero[];
  selectedHero: Hero;
  // als je op een hero klikt dat een form komt
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  ngOnInit() {
  }
 

}
