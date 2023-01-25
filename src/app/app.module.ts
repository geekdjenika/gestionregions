import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AddregionComponent } from './regions/addregion/addregion.component';
import { UpdateregionComponent } from './regions/updateregion/updateregion.component';
import { RegionlistComponent } from './regions/regionlist/regionlist.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AddregionComponent,
    UpdateregionComponent,
    RegionlistComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatButtonModule,
    RouterLinkActive,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
