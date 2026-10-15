import { Component } from '@angular/core';
import { Hero, Powerstat } from '../../shared/interfaces/hero.interface';

@Component({
  imports: [],
  selector: 'app-hero-item',
  styleUrl: './hero-item.scss',
  templateUrl: './hero-item.html',
})
export class HeroItem {
  hero: Hero = {
    id: 1,
    name: 'Cool Bruno',
    powerstats: {
      carisma: 100,
      fuerza: 80,
      inteligencia: 60,
      velocidad: 75,
      destreza: 90,
      sabiduria: 25,
    },
    image:'/img/cool_bruno.jpg',
  };

  decrementPowerstat(powerstat: Powerstat):void {
    const value = this.hero.powerstats[powerstat];
    if (value > 0) {
      this.hero.powerstats[powerstat]--;
    }
  }

  incrementPowerstat(powerstat: Powerstat):void {
    const value = this.hero.powerstats[powerstat];
    if (value < 100) {
      this.hero.powerstats[powerstat]++;
    }
  }
}
