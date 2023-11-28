import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomos } from './Quienes_somos/Quienes_somos';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './Inicio/Inicio';
import { Contacto } from './Contacto/Contacto';
import { Actividades } from './Actividades/Actividades';
import { foro } from './Foro/foro';


const appRoutes:Routes=[

  {path:'',component:Inicio},
  {path:'QuienesSomos', component:QuienesSomos},
  {path:'Contacto', component:Contacto},
  {path:'Actividades', component:Actividades},
  {path:'foro',component:foro}
  
];

@NgModule({
  
  declarations: [
    AppComponent,QuienesSomos,Inicio,Contacto,Actividades,foro
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
