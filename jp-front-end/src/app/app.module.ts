import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomeTileComponent } from './home-tile/home-tile.component';
import { BioPageComponent } from './bio-page/bio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeTileComponent,
    BioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
