import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPage } from './history.page';
import { HistoryPageRoutingModule } from './history.page.routing.module';
import { HistoryModule } from 'src/app/features/history/history.module';
import { SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [
    HistoryPage
  ],
  imports: [
    CommonModule,

    SharedModule,
    HistoryModule,
    HistoryPageRoutingModule
  ]
})
export class HistoryPageModule { }
