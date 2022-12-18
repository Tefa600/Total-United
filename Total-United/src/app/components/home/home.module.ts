import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LinkBarComponent } from './link-bar/link-bar.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
    declarations: [
        HomeComponent,
        LinkBarComponent,
        NavigationComponent
    ],
  exports: [
    HomeComponent,
    LinkBarComponent,
    NavigationComponent
  ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
