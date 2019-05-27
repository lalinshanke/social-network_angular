import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { MainContentSectionComponent } from './main-content-section/main-content-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { FormsModule } from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      HeaderSectionComponent,
      LeftSectionComponent,
      MainContentSectionComponent,
      RightSectionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
