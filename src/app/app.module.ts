import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { MobiPageComponent } from './mobi-page/mobi-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { SecLogoComponent } from './sec-logo/sec-logo.component';
import { ItTechPageComponent } from './it-tech-page/it-tech-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { SportPageComponent } from './sport-page/sport-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    FeaturesPageComponent,
    BusinessPageComponent,
    MobiPageComponent,
    FashionPageComponent,
    SecLogoComponent,
    ItTechPageComponent,
    TravelPageComponent,
    SportPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
