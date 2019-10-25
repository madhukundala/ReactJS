import Types from "./Types";

class GroceryAction {
  static getOverviewDetails(clientToken, selectedAccounts) {
    return function(dispatch) {
      dispatch({
        type: Types["portfolio/SUBMIT_OVERVIEW"],
        payload: {
          clientToken: clientToken,
          selectedAccounts: selectedAccounts
        }
      });
    };
  }

  static clearOverviewSubmit() {
    return function(dispatch) {
      dispatch({
        type: Types["portfolio/CLEAR_OVERVIEW"]
      });
    };
  }

  static getCategoryList() {
    return function(dispatch) {
      dispatch({
        type: Types["portfolio/START_CATEGORY_LIST"]
      });
    };
  }

  static getProductList(category) {
    return function(dispatch) {
      dispatch({
        type: Types["portfolio/START_PRODUCTS_LIST"],
        payload: {
          category: category
        }
      });
    };
  }

  static deleteProduct(id) {

    return dispatch => {
      dispatch({
        type: Types["portfolio/START_DELETE_PRODUCT"],
        payload: {
          id: id
        }
      });
    };
  }


  static startUpdateProduct(product) {

    return dispatch => {
      dispatch({
        type: Types["portfolio/START_UPDATE_PRODUCT"],
        payload: {
          product: product
        }
      });
    };
  }
}

export { GroceryAction };
