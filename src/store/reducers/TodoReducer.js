import {ActionTypes} from '../Constant';
import {INITIAL_DATA} from '../InitialData';

export const TodoReducer = (storeData, action) => {
  switch (action.type) {

    case ActionTypes.LOAD_DATA: {
      return {...storeData, todos: action.payload};
    }

    case ActionTypes.CREATE_ITEM: {
      const newTodos = [...storeData.todos, action.payload];
      return {...storeData, todos: newTodos};
    }

    case ActionTypes.UPDATE_ITEM: {
      const updatedItem = action.payload;
      const newTodos = storeData.todos.map(
        (todo) => todo.id !== updatedItem.id
          ? todo
          : updatedItem
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
