import { HistoryLog } from './history-log.model';

export interface HistoryState {
    logs: HistoryLog[];
    initialized: boolean;
}
