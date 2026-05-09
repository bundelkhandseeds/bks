import { Component } from '@angular/core';
import {HeroComponent} from './components/landing/hero/hero.component';
import {HeaderComponent} from './components/landing/header/header.component';
import {FooterComponent} from './components/landing/footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bks';
}
