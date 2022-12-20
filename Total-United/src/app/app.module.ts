import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {HomeModule} from "./components/home/home.module";
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { CareerComponent } from './components/pages/career/career.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SubsidiariesComponent } from './components/pages/subsidiaries/subsidiaries.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    CareerComponent,
    ContactComponent,
    SubsidiariesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
