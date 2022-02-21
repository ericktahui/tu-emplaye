import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LandingService } from './components/landing/landing.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    HomeComponent
  ],
  entryComponents: [LandingComponent],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [LandingService],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    HomeComponent
  ]
})
export class AppModule { }

