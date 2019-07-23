import Types from './../actions/Types'
import {createReducer} from "reduxsauce";


export class OverviewReducer {

    static initialState = {
        result: null
    };

    static actionHandlers = {
        [Types['portfolio/SUBMIT_OVERVIEW']]: OverviewReducer.submitOverview,
        [Types['portfolio/SUCCESS_OVERVIEW']]: OverviewReducer.successOverview,
        [Types['portfolio/CLEAR_OVERVIEW']]: OverviewReducer.clearOverview
    };


    static submitOverview(state, {type, payload}) {
        console.log('submitOverview reducer ', type, payload);
        return {
            ...state
        }
    };


    static clearOverview(state) {
        console.log('clearOverview reducer ');
        return {
            ...state,
            ...OverviewReducer.initialState
        }
    };


    static successOverview(state, {type, payload}) {
        console.log('successOverview reducer ', type, payload);
        return {
            ...state,
            result: payload
        }
    };
}


export default createReducer(OverviewReducer.initialState, OverviewReducer.actionHandlers)
