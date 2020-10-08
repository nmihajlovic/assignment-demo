import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() value: string;
  @Input() for: string;
}
