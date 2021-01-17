import { combineReducers } from 'redux';
import todo from './todo';

const rootReducer = combineReducers({
  todo, // you might be used to: counter: counter,
});

export default rootReducer;