import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home.page.routing.module';
import { SharedModule } from 'src/app/shared';
import { SearchModule } from 'src/app/features/search/search.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule,
    SearchModule,

    HomePageRoutingModule
  ]
})
export class HomePageModule { }
