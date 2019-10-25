import { ofType } from "redux-observable";
import Types from "../actions/Types";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const fetchUserFulfilled = payload => ({
  type: "portfolio/UPDATED_CATEGORY_LIST",
  payload
});


const url_2 = "http://localhost:8080/api/categories";

const categoryEpic = action$ =>
  action$.pipe(
    ofType(Types["portfolio/START_CATEGORY_LIST"]),

    mergeMap(action => {

      return (
        ajax({
          url: url_2,
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "accept": "application/json;charset=UTF-8"
          }
        })
          .pipe(
            map(data => {
              return fetchUserFulfilled(data.response);
            })
          )
      );
    })
  );

export { categoryEpic };
