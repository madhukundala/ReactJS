import {ofType} from "redux-observable";
import Types from '../actions/Types';
import {map, mergeMap} from "rxjs/operators";
import {ajax} from 'rxjs/ajax';

const fetchUserFulfilled = payload => ({type: 'portfolio/SUCCESS_OVERVIEW', payload});

const overviewEpic = action$ => action$.pipe(
    ofType(Types['portfolio/SUBMIT_OVERVIEW']),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/torvalds`).pipe(
            map(response => fetchUserFulfilled(response))
        )
    )
);


export {overviewEpic};