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
    {label: 'HOME', link: rotas.home},
    {label: "GALERIA", link: rotas.galeria},
    {label: "EVENTOS", link: rotas.eventos},
    {label: "LIVE", link: rotas.live},
    {label: "SOBRE", link: rotas.sobre},
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
