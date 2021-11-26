import { ActionTypes } from "../Constants/actionTypes";

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

export const setNoteTitle = (title) => {
    return {
      type: ActionTypes.SET_NOTE_TITLE,
      payload: title,
    };
  };
  
export const addNote = (note) => {
    return {
      type: ActionTypes.ADD_NOTE,
      payload: note,
    };
  };
  
export const viewList = (flag) => {
    return {
      type: ActionTypes.VIEW_LIST,
      payload: flag,
    };
  };

export const updateNote = (note) => {
    return {
      type: ActionTypes.UPDATE_NOTE,
      payload: note
      
    };
  };
  
export const deleteNote = (noteId) => {
    return {
      type: ActionTypes.DELETE_NOTE,
      payload: noteId
    };
  };