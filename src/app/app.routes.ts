import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {GaleriaPageComponent} from "./pages/galeria-page/galeria-page.component";
import {EventosPageComponent} from "./pages/eventos-page/eventos-page.component";
import {LivePageComponent} from "./pages/live-page/live-page.component";
import {SobrePageComponent} from "./pages/sobre-page/sobre-page.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: "home-page", component: HomePageComponent},
  {path: "galeria-page", component: GaleriaPageComponent},
  {path: "eventos-page", component: EventosPageComponent},
  {path: "live-page", component: LivePageComponent},
  {path: "sobre-page", component: SobrePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
