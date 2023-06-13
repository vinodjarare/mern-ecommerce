import axios from "axios";
export const fetchAllProducts =
  (currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "allProductsRequest",
      });
      let link = `/api/v1/products?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      if (category) {
        link = `/api/v1/products?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&categary=${category}&ratings[gte]=${ratings}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: "allProductsSuccess",
        payload: data.products,
        productsCount: data.productsCount,
        filteredproductsCount: data.filteredproductsCount,
        resultPerPage: data.resultPerPage,
      });
    } catch (error) {
      dispatch({
        type: "allProductsFail",
        payload: error.response.data.message,
      });
    }
  };
export const fetchProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductDetailRequest",
    });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: "ProductDetailSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "ProductDetailFail",
      payload: error.response.data.message,
    });
  }
};

export const createProduct =
  ({ name, auther, price, stock, categary, description, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createProductRequest",
      });
      const config = "application/json  ";
      const { data } = await axios.post(
        "/api/v1/products",
        { name, auther, price, stock, categary, description, image },
        config
      );
      dispatch({
        type: "createProductSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "createProductFail",
        payload: error.response.data.message,
      });
    }
  };
export const updateProduct =
  (id, { name, auther, price, stock, categary, description, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateProductRequest",
      });
      const config = "application/json  ";
      const { data } = await axios.put(
        `/api/v1/products/${id}`,
        { name, auther, price, stock, categary, description, image },
        config
      );
      dispatch({
        type: "updateProductSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "updateProductFail",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });
    const { data } = await axios.delete(`/api/v1/products/${id}`);

    dispatch({
      type: "deleteProductSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFail",
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "clearError" });
};
