import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { SearchComponent } from './components/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
