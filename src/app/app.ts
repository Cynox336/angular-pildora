import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroItem } from './components/hero-item/hero-item';

@Component({
  imports: [RouterOutlet, HeroItem],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-prueba');
}
