import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from './landing-page/landingPage.component';
import { HowToOrder } from './how-to-order/how-to-order';
import { OurMenu } from './our-menu/our-menu';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule,
    LandingPageComponent,
    HowToOrder,
    OurMenu
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
