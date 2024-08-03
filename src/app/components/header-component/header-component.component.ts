import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Button} from "primeng/button";
import {NavMenuComponent} from "../nav-menu/nav-menu.component";

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [
    NgOptimizedImage,
    Button,
    NavMenuComponent
  ],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  imgUrl: string = "assets/images/logo.png";
}
