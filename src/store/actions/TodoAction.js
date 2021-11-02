import {ActionTypes} from '../Constants';

export const createNewItem = (newItem) => ({
  type: ActionTypes.CREATE_NEW_ITEM,
  payload: newItem
})

export const toggleItemStatus = (id) => ({
  type: ActionTypes.TOGGLE_ITEM_STATUS,
  payload: id
})

export const deleteItem = (id) => ({
  type: ActionTypes.DELETE_ITEM,
  payload: id
})
