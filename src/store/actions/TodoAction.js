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

export const createItem = (text) => async (dispatch) => {
  try {
    const unsaved = {
      text: text,
      done: false
    }
    const {data} = await API.createItem(unsaved);
    dispatch({
      type: ActionTypes.CREATE_ITEM,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateItem = (updatedItem) => async (dispatch) => {
  try {
    const {data} = await API.updateItem(updatedItem);
    dispatch({
      type: ActionTypes.UPDATE_ITEM,
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
