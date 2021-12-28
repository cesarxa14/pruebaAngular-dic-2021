import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//material
import { MaterialModules } from './material.module';


//modulos
import { AppRoutingModule } from './app-routing.module';
import {PagesModule}from './pages/pages.module';


import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeModalComponent } from './onboarding/welcome-modal/welcome-modal.component';
import { FeaturesModalComponent } from './onboarding/features-modal/features-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    AppComponent,
    WelcomeModalComponent,
    FeaturesModalComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    MaterialModules,
    BrowserAnimationsModule,
    NgbModule

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    WelcomeModalComponent
  ]
})
export class AppModule { }
