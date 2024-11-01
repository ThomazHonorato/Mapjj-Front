import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {rotas} from '../utils/rotas';
import {HomeComponent} from './pages/home/home.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';
import {EventosComponent} from './pages/eventos/eventos.component';
import {LiveComponent} from './pages/live/live.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {SouNovoComponent} from './pages/sou-novo/sou-novo.component';
import {AgendaComponent} from './pages/agenda/agenda.component';

const routes: Routes = [
  {path: rotas.home, component: HomeComponent},
  {path: rotas.galeria, component: GaleriaComponent},
  {path: rotas.eventos, component: EventosComponent},
  {path: rotas.agenda, component: AgendaComponent},
  {path: rotas.live, component: LiveComponent},
  {path: rotas.sobre, component: SobreComponent},
  {path: rotas.souNovo, component: SouNovoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
