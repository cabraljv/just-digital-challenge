import { ApplicationAction, Product } from './types';

function reducer(state: Product[] = [], action: ApplicationAction) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const already_exists = state.find((atual) => atual.id === action.item.id);

      if (already_exists) {
        const aux = state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        );
        return aux;
      }
      return [...state, action.item];
    }
    case 'REMOVE_ITEM': {
      let cart_item = state.find((atual) => atual.id === action.item.id);
      if (!cart_item) {
        return state;
      }
      if (cart_item.quantity > action.item.quantity) {
        const aux = state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity - action.item.quantity }
            : item
        );
        return aux;
      }
      const aux2 = state.filter((atual) => atual.id !== action.item.id);
      return aux2;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
