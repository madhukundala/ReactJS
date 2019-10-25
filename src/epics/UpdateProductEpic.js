import { ofType } from "redux-observable";
import Types from "../actions/Types";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const fetchUserFulfilled = payload => ({
  type: "portfolio/UPDATED_PRODUCTS_LIST",
  payload
});

const url_2 = "http://localhost:8080/api/products";

const updateProductEpic = action$ =>
  action$.pipe(
    ofType(Types["portfolio/START_UPDATE_PRODUCT"]),

    mergeMap(action => {
      console.log("updateProductEpic::::::" + action.payload.product);

      return ajax({
        url: url_2,
        method: "POST",
        mode: "cors",
        body: action.payload.product,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          accept: "application/json;charset=UTF-8"
        }
      }).pipe(
        map(data => {
          console.log("categoryEpic:::respo:::" + data.response);
          return fetchUserFulfilled(data.response);
        })
      );
    })
  );

export { updateProductEpic };
