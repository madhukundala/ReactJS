import Types from "../actions/Types";
import { createReducer } from "reduxsauce";

export class GroceryReducer {
  static initialState = {
    result: null,
    categoryList: [],
    productList: [],
    deleted: false
  };

  static actionHandlers = {
    [Types["portfolio/START_CATEGORY_LIST"]]: GroceryReducer.startCategories,
    [Types["portfolio/UPDATED_CATEGORY_LIST"]]:
      GroceryReducer.getUpdatedCategories,
    [Types["portfolio/START_PRODUCTS_LIST"]]: GroceryReducer.startProducts,
    [Types["portfolio/GET_PRODUCTS_LIST"]]: GroceryReducer.getProducts,
    [Types["portfolio/START_DELETE_PRODUCT"]]:
      GroceryReducer.startDeleteProduct,
    [Types["portfolio/DELETED_PRODUCT"]]: GroceryReducer.getdeletedProduct,
    [Types["portfolio/UPDATED_PRODUCTS_LIST"]]: GroceryReducer.updatedProducts
  };

  static startDeleteProduct(state, { type, payload }) {
    return {
      ...state
    };
  }

  static getdeletedProduct(state, { type, payload }) {
    return {
      ...state,
      deleted: true
    };
  }

  static startCategories(state, { type, payload }) {
    return {
      ...state
    };
  }

  static getUpdatedCategories(state, { type, payload }) {
    return {
      ...state,
      categoryList: payload
    };
  }

  static clearOverview(state) {
    return {
      ...state,
      ...GroceryReducer.initialState
    };
  }

  static successOverview(state, { type, payload }) {
    return {
      ...state,
      result: payload
    };
  }

  static startProducts(state, { type, payload }) {
    return {
      ...state,
      deleted: false
    };
  }

  static getProducts(state, { type, payload }) {
    return {
      ...state,
      productList: payload
    };
  }

  static updatedProducts(state, { type, payload }) {
    return {
      ...state,
      productList: state.productList.map(product => 
        product.id === payload.id ? payload : product
      )
    };
  }
}

export default createReducer(
  GroceryReducer.initialState,
  GroceryReducer.actionHandlers
);
