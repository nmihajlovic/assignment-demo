import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTemplateModule } from './templates';
import { RadioButtonModule, InputModule, LabelModule, HeadingModule } from './components';
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
    InputModule
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
  ]
})
export class SharedModule { }
