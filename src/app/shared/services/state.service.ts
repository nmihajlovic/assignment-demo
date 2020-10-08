import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';


export abstract class StateService<T> {
    private readonly _state: BehaviorSubject<T>;

    protected get state(): T {
        return this._state.getValue();
    }

    constructor(initialState: T) {
        this._state = new BehaviorSubject<T>(initialState);
    }

    protected select<M>(fn: (state: T) => M): Observable<M> {
        return this._state.asObservable().pipe(
            map((state: T) => fn(state)),
            distinctUntilChanged()
        );
    }

    protected setState(newState: Partial<T>): void {
        this._state.next({
            ...this.state,
            ...newState
        });
    }
}

