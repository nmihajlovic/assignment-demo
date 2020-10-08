import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTemplateModule } from './templates';
import { RadioButtonModule, InputModule, LabelModule, HeadingModule, CardModule } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    GeneralTemplateModule,

    LabelModule,
    HeadingModule,

    RadioButtonModule,
    InputModule,
    CardModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    GeneralTemplateModule,

    LabelModule,
    HeadingModule,

    RadioButtonModule,
    InputModule,
    CardModule
  ]
})
export class SharedModule { }
