import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LinkBarComponent } from './link-bar/link-bar.component';



@NgModule({
    declarations: [
        HomeComponent,
        LinkBarComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
