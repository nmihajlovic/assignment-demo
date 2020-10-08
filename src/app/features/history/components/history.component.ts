import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryLog } from '../models/history-log.model';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  history$: Observable<HistoryLog[]>;

  ngOnInit(): void {
    this.history$ = this.historyService.historyLogs$;
  }
}
