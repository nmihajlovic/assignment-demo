import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTemplate } from './general.template';



@NgModule({
  declarations: [
    GeneralTemplate
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralTemplate
  ]
})
export class GeneralTemplateModule { }
