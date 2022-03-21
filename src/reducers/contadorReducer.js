import {
  DECREMENT,
  DECREMENT_5,
  DECREMENT_MULT_5,
  DECREMENT_MULT_RAMDOM,
  DECREMENT_RAMDOM,
  INCREMENT,
  INCREMENT_5,
  INCREMENT_MULT_5,
  INCREMENT_MULT_RAMDOM,
  INCREMENT_RAMDOM,
  RESET,
} from "../types";

const initialState = 0;
export default function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;
    case INCREMENT_RAMDOM:
      return state + action.payload;
    case DECREMENT_RAMDOM:
      return state - action.payload;
    case INCREMENT_MULT_5:
      return state * action.payload;
    case DECREMENT_MULT_5:
      return state / action.payload;
    case INCREMENT_MULT_RAMDOM:
      return state * action.payload;
    case DECREMENT_MULT_RAMDOM:
      return state / action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
