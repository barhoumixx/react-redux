import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIToDo} from "../actionType/ActionType";

// Action ADD

export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Action DELETE

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Action DONE

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// Action EDIT

export const editToDo = (payload) => {
  return {
    type: EDIToDo,
    payload,
  };
};