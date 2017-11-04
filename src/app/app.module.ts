import { CategoryElementsService } from './servises/category-elements.service';
import { CategoriesServiceService } from './servises/categories-service.service';
import { MainServiseService } from './servises/main-servise.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-page/main-header/main-header.component';
import { BannerComponent } from './main-page/banner/banner.component';
import { SearchComponent } from './main-page/search/search.component';
import { MainContentComponent } from './main-page/main-content/main-content.component';
import { ItemComponent } from './main-page/item/item.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryElementsComponent } from './categories/category-elements/category-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    BannerComponent,
    SearchComponent,
    MainContentComponent,
    ItemComponent,
    FooterComponent,
    CategoriesComponent,
    MainPageComponent,
    CategoriesListComponent,
    CategoryElementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'main', component: MainPageComponent},
      {path: 'categories/:id', component: CategoriesComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: '**', component: MainPageComponent}
    ])
  ],
  providers: [
    MainServiseService,
    CategoriesServiceService,
    CategoryElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
