import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  {
    isDeleted: false,
    isUpdated: false,
    success: false,
    product: {},
  },
  {
    allProductsRequest: (state) => {
      state.loading = true;
    },
    allProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.productsCount = action.productsCount;
      state.filteredproductsCount = action.filteredproductsCount;
      state.resultPerPage = action.resultPerPage;
    },
    allProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    ProductDetailRequest: (state) => {
      state.loading = true;
    },
    ProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    ProductDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createProductRequest: (state) => {
      state.loading = true;
      state.success = false;
    },
    createProductSuccess: (state, action) => {
      state.success = true;
      state.loading = false;
      state.product = action.payload;
    },
    createProductFail: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequest: (state) => {
      state.loading = true;
      state.isDeleted = false;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.isDeleted = true;
      state.product = action.payload;
    },
    deleteProductFail: (state, action) => {
      state.loading = false;
      state.isDeleted = false;
      state.error = action.payload;
    },
    updateProductRequest: (state) => {
      state.loading = true;
      state.isUpdated = false;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.isUpdated = true;
      state.product = action.payload;
    },
    updateProductFail: (state, action) => {
      state.loading = false;
      state.isUpdated = false;
      state.error = action.payload;
    },
    updateReset: (state, action) => {
      state.isUpdated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.isDeleted = false;
      state.message = null;
      state.success = false;
    },
  }
);
