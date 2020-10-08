import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input() title: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
