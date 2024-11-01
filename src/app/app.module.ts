import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {LiveComponent} from './pages/live/live.component';
import {EventosComponent} from './pages/eventos/eventos.component';
import {SouNovoComponent} from './pages/sou-novo/sou-novo.component';
import { AgendaComponent } from './pages/agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    SobreComponent,
    LiveComponent,
    EventosComponent,
    SouNovoComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
