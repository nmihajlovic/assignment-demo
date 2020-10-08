import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, takeUntil } from 'rxjs/operators';
import { SearchState } from '../models';
import { SearchType } from '../models/search-type.enum';
import { SearchService } from '../services/search-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  form: FormGroup;
  searchType = SearchType;
  private readonly unsubscribe = new Subject();

  ngOnInit(): void {
    this.initializeForm();
    this.subscribeToFormValueChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      value: this.fb.control(''),
      type: this.fb.control('')
    });

    this.searchService
        .criteria$
        .pipe(
          distinctUntilChanged(),
          first())
        .subscribe(criteria => {
          const valueField = 'value';
          const typeField = 'type';
          this.form.controls[valueField].setValue(criteria.value);
          this.form.controls[typeField].setValue(criteria.type);
        });
  }

  private subscribeToFormValueChanges(): void {
    this.form
        .valueChanges
        .pipe(
          debounceTime(200),
          distinctUntilChanged(),
          takeUntil(this.unsubscribe))
        .subscribe((value: SearchState) => {
          this.searchService.updateState(value);
        });
  }
}
