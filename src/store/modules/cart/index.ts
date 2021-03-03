import { ApplicationAction, Product } from './types';

function reducer(state: Product[] = [], action: ApplicationAction) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const already_exists = state.find((atual) => atual.id === action.item.id);

      // Verificação caso esse item já existe no carrinho
      // Caso exista, a função apenas irá incrementar o valor de buy_units
      // Caso não, ela deve adicionar esse novo item
      if (already_exists) {
        const aux = state.map((item) =>
          item.id === action.item.id
            ? { ...item, buy_units: item.buy_units + action.item.buy_units }
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
      if (cart_item.buy_units > action.item.buy_units) {
        const aux = state.map((item) =>
          item.id === action.item.id
            ? { ...item, buy_units: item.buy_units - action.item.buy_units }
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
