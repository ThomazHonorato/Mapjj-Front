import { Component } from '@angular/core';
import {HeaderComponentComponent} from "../../components/header-component/header-component.component";
import {FooterComponentComponent} from "../../components/footer-component/footer-component.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
