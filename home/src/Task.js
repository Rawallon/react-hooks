import React, { useEffect, useState, useReducer } from 'react';

// Reducer
const initialTaskStates = {
  tasks: [],
  completedTask: [],
};
const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};
const taskReducer = (state, action) => {
  // console.log('state', state, 'action', action);
  switch (action.type) {
    case TYPES.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    case TYPES.COMPLETE_TASK:
      return {
        ...state,
        completedTask: [...state.completedTask, action.completedTask],
        tasks: state.tasks.filter((el) => el.id !== action.completedTask.id),
      };
    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedTask: state.tasks.filter(
          (el) => el.id !== action.completedTask.id,
        ),
      };
    default:
      return state;
  }
};
// localStorage
const TASKS_STORAGE_KEY = 'todoTasks';
const storeTasks = (taskMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap));
};
const readStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap ? tasksMap : initialTaskStates;
};
// Component
export default function Task() {
  const [taskText, setTaskText] = useState('');
  const taskStorage = readStoredTasks();
  const [state, dispatch] = useReducer(taskReducer, taskStorage);
  const { tasks, completedTask } = state;

  const updateTaskText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    setTaskText('');
    dispatch({
      type: TYPES.ADD_TASK,
      task: { text: taskText, id: new Date().getTime() },
    });
  };
  const completeTask = (cTask) => {
    dispatch({
      type: TYPES.COMPLETE_TASK,
      completedTask: cTask,
    });
  };
  const removeTask = (cTask) => {
    dispatch({
      type: TYPES.DELETE_TASK,
      completedTask: cTask,
    });
  };

  useEffect(() => {
    storeTasks({ tasks, completedTask });
  });

  return (
    <fieldset>
      <h3>Tasks</h3>
      <div className="form">
        <input type="text" value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasks">
        <div className="task-list">
          {tasks.map((task, i) => (
            <div key={i} onClick={(e) => completeTask(task)}>
              {task.text}
            </div>
          ))}
        </div>
        <div className="task-list completed-list">
          {completedTask.map((task, i) => (
            <div key={i} onClick={(e) => removeTask(task.id)}>
              {task.text}
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
