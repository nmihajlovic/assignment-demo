import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTemplate } from './general.template';
import { CardModule } from '../../components';



@NgModule({
  declarations: [
    GeneralTemplate
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    GeneralTemplate
  ]
})
export class GeneralTemplateModule { }
