import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SellCarComponent } from './pages/sell-car/sell-car.component';
import { BuyCarComponent } from './pages/buy-car/buy-car.component';
import { MarketComponent } from './pages/market/market.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrandComponent } from './components/brand/brand.component';
import { LatestAdsComponent } from './components/latest-ads/latest-ads.component';
import { BodyTypeComponent } from './components/body-type/body-type.component';

import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CommonGalleryComponent } from './components/common-gallery/common-gallery.component';
import { PopularRegionComponent } from './components/popular-region/popular-region.component';
import { PopularMakeComponent } from './components/popular-make/popular-make.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SellCarComponent,
    BuyCarComponent,
    MarketComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    LatestAdsComponent,
    BodyTypeComponent,
    CommonGalleryComponent,
    PopularRegionComponent,
    PopularMakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
