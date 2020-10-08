import { Component } from '@angular/core';
import { SearchResultComponent } from '../search-result.component';

@Component({
  selector: 'app-bing-result',
  templateUrl: './bing-result.component.html',
  styleUrls: ['./bing-result.component.scss']
})
export class BingResultComponent extends SearchResultComponent {}
