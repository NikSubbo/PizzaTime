import { ADD_PIZZA } from './action'

export const addPizzaAC = (pizza) => ({
  type: ADD_PIZZA,
  newPizza: { ...pizza }
});

export const fetchPizzasAC = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
      dispatch(addPizzaAC(result[i]));
    }
  };
};
