import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducers";
import { shoppingReducer } from "./shoppingReducers";

const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
