import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  menuItems = [
    {label: 'Home', route: '/home-page'},
    {label: 'Galeria', route: '/galeria-page'},
    {label: 'Eventos', route: '/eventos-page'},
    {label: 'Live', route: '/live-page'},
    {label: 'Sobre', route: '/sobre-page'}
  ];

  constructor(private router: Router) {
  }

  navigate(route: string): void {
    this.router.navigate([route])
  }

}
