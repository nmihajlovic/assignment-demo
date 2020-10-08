import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history.component';
import { SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
