import { OrderService } from './servises/order.service';
import { GoodsCartService } from './servises/goods-cart.service';
import { SearchService } from './servises/search.service';
import { CommentsService } from './servises/comments.service';
import { PrivateOfficeComponent } from './private-office/private-office.component';

import { AuthGuardService } from './servises/auth-guard.service';
import { CookieService } from './servises/cookie.service';
import { LoginService } from './servises/login.service';
import { CpuService } from './servises/cpu.service';
import { LaptopService } from './servises/laptop.service';
import { GoodsService } from './servises/goods.service';
import { CategoryElementsService } from './servises/category-elements.service';
import { CategoriesServiceService } from './servises/categories-service.service';
import { MainServiseService } from './servises/main-servise.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { GoodsComponent } from './goods/goods.component';
import { LaptopComponent } from './goods/laptop/laptop.component';
import { CpuComponent } from './goods/cpu/cpu.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { CommentsComponent } from './goods/comments/comments.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GoodsCartComponent } from './goods-cart/goods-cart.component';
import { FiltersComponent } from './categories/filters/filters.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeliveryComponent } from './delivery/delivery.component';

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
    CategoryElementsComponent,
    GoodsComponent,
    LaptopComponent,
    CpuComponent,
    LoginComponent,
    LoaderComponent,
    PrivateOfficeComponent,
    CommentsComponent,
    SearchResultsComponent,
    GoodsCartComponent,
    FiltersComponent,
    MakeOrderComponent,
    AboutUsComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'main', component: MainPageComponent},
      {path: 'categories/:id', component: CategoriesComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'goods/:catId/:id', component: GoodsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'office',canActivate: [AuthGuardService], component: PrivateOfficeComponent},
      {path: 'search', component: SearchResultsComponent},
      {path: 'goods-cart', component: GoodsCartComponent},
      {path: 'order', canActivate: [AuthGuardService] ,component: MakeOrderComponent},
      {path: 'about', component: AboutUsComponent},
      {path: 'delivery', component: DeliveryComponent},
      {path: '**', component: MainPageComponent}
    ])
  ],
  providers: [
    MainServiseService,
    CategoriesServiceService,
    CategoryElementsService,
    GoodsService,
    LaptopService,
    CpuService,
    LoginService,
    CookieService,
    AuthGuardService,
    CommentsService,
    SearchService,
    GoodsCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
