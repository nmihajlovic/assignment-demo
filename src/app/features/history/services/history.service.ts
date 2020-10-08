import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, withLatestFrom } from 'rxjs/operators';
import { StateService } from 'src/app/shared/services';
import { SearchService } from '../../search/services/search-service';
import { HistoryLog } from '../models/history-log.model';
import { HistoryState } from '../models/history-state.model';


const initialState: HistoryState = {
    logs: [],
    initialized: false
};

@Injectable({ providedIn: 'root' })
export class HistoryService extends StateService<HistoryState> implements OnDestroy {
    constructor(searchService: SearchService) {
        super(initialState);

        searchService?.criteria$
                      .pipe(
                        withLatestFrom(this.initialized$),
                        takeUntil(this.unsubscribe))
                      .subscribe(([value, initialized]) => {
                          if (initialized) {
                              this.add({createdAt: new Date(), value: value.value, type: 'Search' });
                          }
                      });

        this.setState({initialized: true });
    }

    private readonly unsubscribe = new Subject();
    private readonly initialized$: Observable<boolean> = this.select(state => state.initialized);

    historyLogs$: Observable<HistoryLog[]> = this.select(state => state.logs);

    add(value: HistoryLog): void {
        this.setState({ logs: [...this.state.logs, value] });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
