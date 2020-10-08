import { Component } from '@angular/core';
import { SearchResultComponent } from '../search-result.component';

@Component({
  selector: 'app-google-result',
  templateUrl: './google-result.component.html',
  styleUrls: ['./google-result.component.scss']
})
export class GoogleResultComponent extends SearchResultComponent {}
