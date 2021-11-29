import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPageComponent } from './business-page/business-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
// import { FeaturesPageComponent } from './features-page/features-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItTechPageComponent } from './it-tech-page/it-tech-page.component';
import { MobiPageComponent } from './mobi-page/mobi-page.component';
import { SportPageComponent } from './sport-page/sport-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  // {
  //   path: 'features', component: FeaturesPageComponent,
  //   // children: [
  //   //   {
  //   //     path: 'more', // child route path
  //   //     component: DetailPageComponent, // child route component that the router renders
  //   //   },
  //   // ]
  // },
  {
    path: 'business', component: BusinessPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  {
    path: 'mobile', component: MobiPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  {
    path: 'fashionPage', component: FashionPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  {
    path: 'itTech', component: ItTechPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  {
    path: 'travel', component: TravelPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  {
    path: 'sport', component: SportPageComponent,
    // children: [
    //   {
    //     path: 'more', // child route path
    //     component: DetailPageComponent, // child route component that the router renders
    //   },
    // ]
  },
  { path: 'more', component: DetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
