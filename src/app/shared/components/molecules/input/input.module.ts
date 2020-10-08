import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../../atoms';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule
  ],
  exports: [
    FormsModule,
    InputComponent
  ]
})
export class InputModule { }
