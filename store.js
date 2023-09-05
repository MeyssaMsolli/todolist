import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/reducers';

const rootReducer = combineReducers({
  task: taskReducer,
  // Other reducers can be combined here if needed
});

const store = createStore(rootReducer);

export default store;
