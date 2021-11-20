import { createStore } from 'redux';
import Reducer from './Reducers/index'

const myStore = createStore(
  Reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default myStore;