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

export const sumar = () => ({ type: INCREMENT });
export const restar = () => ({ type: DECREMENT });
export const sumar5 = () => ({ type: INCREMENT_5, payload: 5 });
export const restar5 = () => ({ type: DECREMENT_5, payload: 5 });
export const multi5 = () => ({ type: INCREMENT_MULT_5, payload: 5 });
export const div5 = () => ({ type: DECREMENT_MULT_5, payload: 5 });
export const sumaramdom = () => ({
  type: INCREMENT_RAMDOM,
  payload: Math.floor(Math.random() * 100),
});
export const restaramdom = () => ({
  type: DECREMENT_RAMDOM,
  payload: Math.floor(Math.random() * 100),
});
export const multiramdom = () => ({
  type: INCREMENT_MULT_RAMDOM,
  payload: Math.floor(Math.random() * 100),
});
export const divramdom = () => ({
  type: DECREMENT_MULT_RAMDOM,
  payload: Math.floor(Math.random() * 100),
});

export const reset = () => ({ type: RESET });
