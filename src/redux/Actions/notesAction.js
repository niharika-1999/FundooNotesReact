import { ActionTypes } from '../Constants/actionTypes';

export const setNotes = (notes) => {
  return {
    type: ActionTypes.SET_ALL_NOTES,
    payload: notes,
  };
};

export const setSearchedNotes = (notes) => {
  return {
    type: ActionTypes.SET_SEARCHED_NOTES,
    payload: notes,
  };
};