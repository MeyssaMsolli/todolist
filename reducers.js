const initialState = {
    tasks: [],
    notes: [], 
};

  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            { ...action.payload, id: state.tasks.length + 1, isDone: false },
          ],
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId
              ? { ...task, description: action.payload.newDescription }
              : task
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  