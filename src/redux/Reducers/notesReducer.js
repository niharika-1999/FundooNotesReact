import { ActionTypes } from '../Constants/actionTypes';

const initialState = {
    notes: [],
    searchedNotes: [],
    viewList:false
  };
  
  export const reducerForNotes = (state = initialState, { type, payload } ) => {
    switch ( type ) {
      case ActionTypes.SET_ALL_NOTES:
        return {...state, notes: payload }
      case ActionTypes.SET_SEARCHED_NOTES:
          return {...state,searchedNotes: payload }
      case ActionTypes.SET_NOTE_TITLE:
          return { ...state, title: payload };
      case ActionTypes.ADD_NOTE:
          return { ...state, notes: [...state.notes, payload] };
      case ActionTypes.VIEW_LIST:
          return {...state,viewList:!state.viewList}
      case ActionTypes.UPDATE_NOTE:
        let newNote = [...state.notes];
        console.log(payload)
        let index=state.notes.findIndex(note=>note._id===payload.data._id)
        newNote[index]=payload.data
        return {...state,notes:newNote}    
      case ActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(item => item._id !== payload)
            };
        default:
            return state;
     }
     };