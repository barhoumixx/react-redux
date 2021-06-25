import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIToDo} from "../actionType/ActionType";
const Initialisation = {
  ToDo: [],
};

// PURE FUNCTION

const ToDOReducer = (state = Initialisation, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        ToDo: [...state.ToDo, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        ToDo: state.ToDo.filter((el) => el.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        ToDo: state.ToDo.map((el) =>
          el.id === action.payload ? {...el, isDone: !el.isDone} : el
        ),
      };

    case EDIToDo:
      return {
        ...state,
        ToDo: state.ToDo.map((el) =>
          el.id === action.payload.id
            ? {...el, description: action.payload.description}
            : el
        ),
      };
    default:
      return state;
  }
};

export default ToDOReducer;