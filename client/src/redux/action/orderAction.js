import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "createOrderRequest" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: "createOrderSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createOrderFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersRequest",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/v1/admin/orders`, config);

    dispatch({
      type: "getAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersFail",
      payload: error.response.data.message,
    });
  }
};

// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "myOrdersRequest" });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: "myOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "myOrdersFail",
      payload: error.response.data.message,
    });
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: "updateOrderRequest" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch({ type: "updateOrderSuccess", payload: data.success });
  } catch (error) {
    dispatch({
      type: "updateOrderFail",
      payload: error.response.data.message,
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteOrderRequest" });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch({ type: "deleteOrderSuccess", payload: data.success });
  } catch (error) {
    dispatch({
      type: "deleteOrderFail",
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "orderDetailsRequest" });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: "orderDetailsSuccess", payload: data.order });
  } catch (error) {
    dispatch({
      type: "orderDetailsFail",
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "clearErrors" });
};

// My Orders
export const getIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "getIncomeRequest" });

    const { data } = await axios.get("/api/v1/income");

    dispatch({ type: "getIncomeSuccess", payload: data?.data });
  } catch (error) {
    dispatch({
      type: "getIncomeFail",
      payload: error.response.data.message,
    });
  }
};
