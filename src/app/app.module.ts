import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { HomeComponent } from './home/home.component';
import { DataStorageService } from './dataservice/data-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollIdFilterComponent } from './infinite-scroll-id-filter/infinite-scroll-id-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InfiniteScrollComponent,
    HomeComponent,
    InfiniteScrollIdFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
