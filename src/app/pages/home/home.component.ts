import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { BookComponent } from '../../components/book/book.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { CubscribwComponent } from '../../components/cubscribw/cubscribw.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true, 
  imports: [HeaderComponent, HeroComponent, RatingComponent,PackagesComponent, BookComponent, WhyUsComponent,CubscribwComponent],
})
export class HomeComponent {}
