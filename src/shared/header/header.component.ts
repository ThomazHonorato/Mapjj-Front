import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {rotas} from '../../utils/rotas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 currentRoute: any;

  menuItems = [
    {label: 'Home', link: rotas.home},
    {label: "Galeria", link: rotas.galeria},
    {label: "Eventos", link: rotas.eventos},
    {label: "Live", link: rotas.live},
    {label: "Sobre", link: rotas.sobre},
  ]

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isActive(link: string): boolean {
    return this.currentRoute === `/${link}`;
  }

  onSubmit(){
    this.router.navigate([rotas.souNovo])
  }

}
