import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component'


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
        <section>
            <div><app-navbar></app-navbar></div>
            <h1 class="fontAfacadFlux">SAKURA RAMEN</h1>
            <h2>BEST RAMEN IN TOWN</h2>
        </section>
    `,
    styleUrls: ['./landinPage.component.scss']
})
export class LandingPageComponent {}