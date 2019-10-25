import { ofType } from "redux-observable";
import Types from "../actions/Types";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const fetchUserFulfilled = payload => ({
  type: "portfolio/GET_PRODUCTS_LIST",
  payload
});



let url_2 = "http://localhost:8080/api/products";

const productsEpic = action$ =>
  action$.pipe(
    ofType(Types["portfolio/START_PRODUCTS_LIST"]),

    mergeMap(action => {
 if(action.payload.category!=null && action.payload.category!==""){
     url_2 = "http://localhost:8080/api/products/"+action.payload.category;
 }

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




export { productsEpic };
