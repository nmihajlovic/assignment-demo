import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HistoryService } from './features/history/services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private historyService: HistoryService, private router: Router) {}

  private readonly unsubscribe = new Subject();

  ngOnInit(): void {
    this.router
        .events
        .pipe(takeUntil(this.unsubscribe)).subscribe(e => {
          if (e instanceof NavigationEnd) {
            this.historyService.add({createdAt: new Date(), type: 'Navigation', value: e.url });
          }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
