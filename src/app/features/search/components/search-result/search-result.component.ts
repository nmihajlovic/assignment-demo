import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchState } from '../../models';
import { SearchService } from '../../services/search-service';

@Component({
  template: '',
})
export class SearchResultComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  criteria$: Observable<SearchState>;

  ngOnInit(): void {
    this.criteria$ = this.searchService.criteria$;
  }
}
