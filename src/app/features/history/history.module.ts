import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history.component';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
