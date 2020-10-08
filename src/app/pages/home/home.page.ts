import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, withLatestFrom } from 'rxjs/operators';
import { SearchType } from 'src/app/features/search/models/search-type.enum';
import { SearchService } from 'src/app/features/search/services/search-service';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  constructor(private searchService: SearchService, private router: Router) { }

  private readonly unsubscribe = new Subject();

  ngOnInit(): void {
    this.router
        .events
        .pipe(withLatestFrom(this.searchService.criteria$), takeUntil(this.unsubscribe))
        .subscribe(([e, state]) => {
          if (e instanceof NavigationEnd) {
            switch (state?.type) {
              case SearchType.Bing:
                this.router.navigateByUrl('bing-search');
                break;
              case SearchType.Google:
                this.router.navigateByUrl('google-search');
                break;
            }
          }
        });

    this.searchService
        .criteria$
        .pipe(
          distinctUntilChanged(),
          takeUntil(this.unsubscribe))
        .subscribe(criteria => {
          switch (criteria?.type) {
            case SearchType.Bing:
              this.router.navigateByUrl('bing-search');
              break;
            case SearchType.Google:
              this.router.navigateByUrl('google-search');
              break;
          }
        });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
