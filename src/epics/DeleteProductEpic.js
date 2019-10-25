import { ofType } from "redux-observable";
import Types from "../actions/Types";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

const fetchDeletedResponse = payload => ({
  type: "portfolio/DELETED_PRODUCT",
  payload
});



let url_2 = null;

const deleteProductEpic = action$ =>
  action$.pipe(
    ofType(Types["portfolio/START_DELETE_PRODUCT"]),

    mergeMap(action => {
      if (action.payload.id != null) {
        url_2 = "http://localhost:8080/api/product/" + action.payload.id;
      }

      return ajax({
        url: url_2,
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "accept": "application/json;charset=UTF-8"
        }
      }).pipe(
        map(data => {
          return (fetchDeletedResponse(data.response)); 
        })
      );
    })
  );

export { deleteProductEpic };
