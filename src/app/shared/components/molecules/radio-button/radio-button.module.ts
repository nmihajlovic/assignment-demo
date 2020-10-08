import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../../atoms';



@NgModule({
  declarations: [
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule
  ],
  exports: [
    FormsModule,
    RadioButtonComponent
  ]
})
export class RadioButtonModule { }
