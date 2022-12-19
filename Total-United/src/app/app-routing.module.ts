import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {using} from "rxjs";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {ServiceComponent} from "./components/pages/service/service.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
