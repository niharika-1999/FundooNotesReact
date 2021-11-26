import { combineReducers } from 'redux' ; 
import { reducerForNotes } from './notesReducer'

const reducers = combineReducers({
  allNotes: reducerForNotes,
});

export default reducers;