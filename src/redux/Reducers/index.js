import { combineReducers } from 'redux' ; 
import { reducerForNotes } from '../Reducers/notesReducer'

const reducers = combineReducers({
  allNotes: reducerForNotes,
});

export default reducers;