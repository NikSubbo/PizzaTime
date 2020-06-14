import { ADD_PIZZA, ADD_TO_CART, REMOVE_FROM_CART, TOTAL_REMOVE_FROM_CART } from './action'

const initState = {
  pizzas: [],
  addedItems: [],
  total: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzas, action.newPizza]
      }
    case ADD_TO_CART:
      let addedItem = state.pizzas.find(pizza => pizza._id === action.id)
      let existedPizza = state.addedItems.find(pizza => action.id === pizza._id)
      if (existedPizza) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      }
      else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }
    case REMOVE_FROM_CART:
      let itemToDecrease = state.pizzas.find(pizza => pizza._id === action.id)
      let leftItems = state.addedItems.filter(pizza => action.id !== pizza._id)
      if (itemToDecrease.quantity !== 1) {
        itemToDecrease.quantity -= 1
        let newTotal = state.total - itemToDecrease.price
        return {
          ...state,
          total: newTotal
        }
      }
      else {
        itemToDecrease.quantity -= 1
        let newTotal = state.total - itemToDecrease.price
        return {
          ...state,
          addedItems: leftItems,
          total: newTotal
        }
      }
    case TOTAL_REMOVE_FROM_CART:
      let itemToRemove = state.addedItems.find(pizza => action.id === pizza._id)
      let updatedTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
      itemToRemove.quantity = 0
      let updatedItems = state.addedItems.filter(pizza => action.id !== pizza._id)
      return {
        ...state,
        addedItems: updatedItems,
        total: updatedTotal
      }
    default:
      return { ...state }
  }
}

export default reducer;
