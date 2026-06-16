import {
  ADD_PIZZA,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOTAL_REMOVE_FROM_CART,
} from "./action";

const baseURL = process.env.REACT_APP_BACKEND_URL || "/api";

export const addPizzaAC = (pizza) => ({
  type: ADD_PIZZA,
  newPizza: { ...pizza },
});

export const fetchPizzasAC = () => {
  return async (dispatch) => {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
      dispatch(addPizzaAC(result[i]));
    }
  };
};

export const addToCartAC = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCartAC = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const totalRemoveFromCartAC = (id) => ({
  type: TOTAL_REMOVE_FROM_CART,
  id,
});
