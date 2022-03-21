import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const createActions = (data) => ({ type: CREATE_DATA, payload: data });
export const readActions = (data) => ({ type: READ_ALL_DATA, payload: data });
export const updateActions = (data) => ({ type: UPDATE_DATA, payload: data });
export const deleteActions = (id) => ({ type: DELETE_DATA, payload: id });
export const noActions = () => ({ type: NO_DATA });
