import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  products: [
    { id: 1, name: "Set Juego de Tubos", price: 9.999 },
    { id: 2, name: "Sommier Kiko", price: 108.64 },
    { id: 3, name: "Stereo Auto", price: 9.299 },
    { id: 4, name: "Aire Acondicionado BGH", price: 76.999 },
    { id: 5, name: "Tablet Smart Kassei", price: 15.399 },
  ],
  cart: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      //1. Buscar el id en la lista de productos q tenemos q lo recibe como payload y guardarlo en una variable (newItem)
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);
      //2. Verificamos que el producto no se duplique y lo guardamos en una variable (itemIncart)
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            // SI EXISTE YA EL PRODUCTO:
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            // SI NO ENCONTRO UN ITEM IGUAL:  retornamos el estado del carrito con el nuevo item y le adicionamos una nueva propiedad (quantity) con el numero 1(seria el primer item del carrito)
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}
