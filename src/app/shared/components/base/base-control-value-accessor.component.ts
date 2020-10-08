import { OnInit, Self, Optional, Component, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    template: ''
})
export abstract class BaseControlValueAccessor implements ControlValueAccessor, OnInit {
    constructor(@Self()@Optional() protected controlDirective: NgControl) {
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }

    @Input() disabled: boolean;

    protected abstract val: any;
    private _id: string;


    protected onChange: any = () => {};
    protected onTouched: any = () => {};

    get id(): string {
        return this._id;
    }

    ngOnInit(): void {
        // for sake of simplicity
        this._id = Math.random().toString();
    }

    writeValue(value: any): void {
        this.val = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(disabled: boolean): void {
        this.disabled = disabled;
    }
}
