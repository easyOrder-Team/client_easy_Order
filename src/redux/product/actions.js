import * as types from "../types";
import axios from "axios";

export const getProducts = () => {
  return (dispatch) =>
    axios
      .get(`${import.meta.env.VITE_URL}/api/v1/products`)
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const sortByTimePreparation = (time, categoryPrep) => {
  return (dispatch) =>
    axios
      .get(`${import.meta.env.VITE_URL}/api/v1/products/filter/timePreparationOrder`)
      .then((response) => {
        dispatch({
          type: types.SORT_BY_TIME_PREPARATION,
          payload: { responsePrep: response.data, time, categoryPrep },
        });
      });
};

export const getProductByName = (name) => {
  return (dispatch) =>
    axios
      .get(`${import.meta.env.VITE_URL}/api/v1/products?name=${name}`)
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCTS_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const filterByCategory = (category) => {
  return (dispatch) =>
    axios
      .get(
        `${import.meta.env.VITE_URL}/api/v1/products/filter/filterByCategory?category=${category}`
      )
      .then((response) => {
        dispatch({
          type: types.FILTER_BY_CATEGORY,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};
//--------------------------- CODIGO PREVIO ---------------------------------------------

// export const sortProductsByPrice = (price, category) => {
//   return (dispatch) =>
//     axios
//       .get(`${import.meta.env.VITE_URL}/api/v1/products/filter/priceOrder`)
//       .then((response) => {
//         dispatch({
//           type: types.SORT_PRODUCTS_BY_PRICE,
//           payload: { response: response.data, price, category },
//         });
//         supportPrice = [];
//       })
//       .catch((error) => console.log(error));
// };
//
//--------------------------- CODIGO LILA ---------------------------------------------
export const sortProductsByPrice = (category, order) => {
  return (dispatch) =>
    axios
      .get(
        `${import.meta.env.VITE_URL}/api/v1/products/filter/priceOrder?category=${category}&order=${order}`
      )
      .then((response) => {
        console.log("respuestaaaa", response.data);
        dispatch({
          type: types.SORT_PRODUCTS_BY_PRICE,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const getProductById = (id) => {
  return (dispatch) =>
    axios
      .get(`${import.meta.env.VITE_URL}/api/v1/products/${id}`)
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCT_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const clearProduct = () => {
  return {
    type: types.CLEAR_PRODUCTS,
  };
};

export const addProductCart = (product) => {
  return {
    type: types.ADD_PRODUCT_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART,
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: id,
  };
};

export const updateProduct = (id, data) => {
  return (dispatch) =>
    axios
      .put(`${import.meta.env.VITE_URL}/api/v1/products/update/${id}`, data)
      .then((response) => {
        dispatch({
          type: types.UPDATE_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const deleteProductAdmin = (id) => {
  return (dispatch) =>
    axios
      .delete(`${import.meta.env.VITE_URL}/api/v1/products/${id}`)
      .then((response) => {
        dispatch({
          type: types.DELETE_PRODUCT_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};
