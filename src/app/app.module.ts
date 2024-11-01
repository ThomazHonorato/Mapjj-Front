import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LiveComponent } from './pages/live/live.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { SouNovoComponent } from './pages/sou-novo/sou-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    SobreComponent,
    LiveComponent,
    EventosComponent,
    SouNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
