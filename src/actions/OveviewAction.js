import Types from './Types'

class OverviewAction {

    static getOverviewDetails(clientToken, selectedAccounts) {

        console.log("getOverviewDetails:ACTION  ::", clientToken, selectedAccounts);
        return function (dispatch) {

            dispatch({
                type: Types['portfolio/SUBMIT_OVERVIEW'],
                payload: {
                    clientToken: clientToken,
                    selectedAccounts: selectedAccounts
                }
            });

        }
    }


    static clearOverviewSubmit() {

        console.log("clearOverviewSubmit:ACTION  ::");
        return function (dispatch) {

            dispatch({
                type: Types['portfolio/CLEAR_OVERVIEW']
            });
        }
    }


}

export {OverviewAction};



