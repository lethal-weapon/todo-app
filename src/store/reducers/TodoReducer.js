import {ActionTypes} from '../Constants';
import {INITIAL_DATA} from '../InitialData';

export const TodoReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ITEM: {
      const newTodos = [...storeData.todos, action.payload];
      return {...storeData, todos: newTodos};
    }

    case ActionTypes.TOGGLE_ITEM_STATUS: {
      const newTodos = storeData.todos.map(
        (todo) => todo.id !== action.payload
          ? todo
          : {...todo, done: !todo.done}
      );
      return {...storeData, todos: newTodos};
    }

    case ActionTypes.DELETE_ITEM: {
      const newTodos = storeData.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {...storeData, todos: newTodos};
    }

    default:
      return storeData || INITIAL_DATA;
  }
}
