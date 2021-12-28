import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";


//import { AuthGuard } from "../guards/auth.guard";
import { AsesorComponent } from "./asesor/asesor.component";
import { PolizasComponent } from "./polizas/polizas.component";
import { OfertasComponent } from "./ofertas/ofertas.component";

const routes: Routes = [
 {
   path: 'dashboard',
   component: PagesComponent,
   canActivate: [],
   children: [
     //quitar el nombre para la ruta por defecto
     //{ path: '', component: DasboardComponent, data: {title: 'dasboard'} },
     { path: '', component: AsesorComponent, data: {title: 'Asesor'} },
     { path: 'polizas', component: PolizasComponent, data: {title: 'Polizas'} },
     { path: 'ofertas', component: OfertasComponent, data: {title: 'Oferas'} },

   ],
 },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{}
