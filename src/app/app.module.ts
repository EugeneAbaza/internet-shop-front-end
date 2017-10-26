import { MainServiseService } from './servises/main-servise.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-page/main-header/main-header.component';
import { BannerComponent } from './main-page/banner/banner.component';
import { SearchComponent } from './main-page/search/search.component';
import { MainContentComponent } from './main-page/main-content/main-content.component';
import { ItemComponent } from './main-page/item/item.component';
import { FooterComponent } from './main-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    BannerComponent,
    SearchComponent,
    MainContentComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MainServiseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
