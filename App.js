import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
// import Note from  './components/Note';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

