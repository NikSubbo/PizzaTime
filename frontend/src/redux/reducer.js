import { ADD_PIZZA } from './action'

const initState = {
  pizzas: [],
  addedItems: [],
  total: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return { ...state, pizzas: [...state.pizzas, action.newPizza] }
    default:
      return { ...state }
  }
}

export default reducer;
