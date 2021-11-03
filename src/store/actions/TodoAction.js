import {ActionTypes} from '../Constant';
import * as API from '../API';

export const loadData = () => async (dispatch) => {
  try {
    const {data} = await API.loadData();
    dispatch({
      type: ActionTypes.LOAD_DATA,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const createNewItem = (text) => async (dispatch) => {
  try {
    const unsaved = {
      text: text,
      done: false
    }
    const {data} = await API.createNewItem(unsaved);
    dispatch({
      type: ActionTypes.CREATE_NEW_ITEM,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const toggleItemStatus = (oldItem) => async (dispatch) => {
  try {
    const updated = {...oldItem, done: !oldItem.done};
    const {data} = await API.toggleItemStatus(updated);
    dispatch({
      type: ActionTypes.TOGGLE_ITEM_STATUS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteItem = (id) => async (dispatch) => {
  try {
    const response = await API.deleteItem(id);
    if (response.status === 200) {
      dispatch({
        type: ActionTypes.DELETE_ITEM,
        payload: id
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
