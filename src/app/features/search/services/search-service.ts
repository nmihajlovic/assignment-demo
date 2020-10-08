import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/shared/services';
import { SearchState } from '../models';
import { SearchType } from '../models/search-type.enum';

const initialState: SearchState = {
    type: SearchType.Google,
    value: ''
};

@Injectable({ providedIn: 'root'})
export class SearchService extends StateService<SearchState> {
    constructor() {
        super(initialState);
    }

    criteria$: Observable<SearchState> = this.select(state => state);

    updateState(value: Partial<SearchState>): void {
        this.setState(value);
    }
}
