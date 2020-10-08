import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControlValueAccessor } from '../../base/base-control-value-accessor.component';

@Component({
  selector: 'mol-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends BaseControlValueAccessor {
  constructor(@Self()@Optional() controlDirective: NgControl) {
    super(controlDirective);
  }

  @Input() label: string;
  @Input() value: any;

  private _val: any;

  set val(value: string) {
    this._val = value;
    this.onChange(value);
    this.onTouched(value);
  }

  get val(): string {
    return this._val;
  }

}
