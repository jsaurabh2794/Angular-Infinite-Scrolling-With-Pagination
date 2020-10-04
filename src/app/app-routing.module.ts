import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollIdFilterComponent } from './infinite-scroll-id-filter/infinite-scroll-id-filter.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'infinite-scroll', component: InfiniteScrollComponent},
  {path: 'infinite-scroll-byid', component: InfiniteScrollIdFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
