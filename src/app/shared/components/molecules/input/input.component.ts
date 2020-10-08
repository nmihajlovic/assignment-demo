import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControlValueAccessor } from '../../base/base-control-value-accessor.component';

@Component({
  selector: 'mol-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseControlValueAccessor {

  constructor(@Self()@Optional() controlDirective: NgControl) {
      super(controlDirective);
  }

  @Input() label: string;
  @Input() type: 'text' | 'number' = 'text';

  @Output() private readonly focused: EventEmitter<any> = new EventEmitter<any>();
  @Output() private readonly focusedout: EventEmitter<any> = new EventEmitter<any>();
  @Output() private readonly blured: EventEmitter<any> = new EventEmitter<any>();
  @Output() private readonly keyUpPressed: EventEmitter<any> = new EventEmitter<any>();
  @Output() private readonly keyDownPressed: EventEmitter<any> = new EventEmitter<any>();

  private _val: any;

  set val(value: string) {
    this._val = value;
    this.onChange(value);
    this.onTouched(value);
  }

  get val(): string {
    return this._val;
  }

  onFocus(event): void {
    event.stopPropagation();
    this.focused.emit(event);
  }

  onFocusOut(event): void {
    event.stopPropagation();
    this.focusedout.emit(event);
  }

  onBlur(event): void {
    event.stopPropagation();
    this.blured.emit(event);
  }

  onKeyUp(event): void {
    event.stopPropagation();
    this.keyUpPressed.emit(event);
  }

  onKeyDown(event): void {
    event.stopPropagation();
    this.keyDownPressed.emit(event);
  }
}
