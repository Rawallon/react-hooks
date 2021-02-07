import React, { useEffect, useState } from 'react';
const TASKS_STORAGE_KEY = 'todoTasks';
const storeTasks = (taskMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap));
};
const readStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap ? tasksMap : { tasks: [], completedTask: [] };
};

export default function Task() {
  const [taskText, setTaskText] = useState('');
  const taskStorage = readStoredTasks();
  const [tasks, setTasks] = useState(taskStorage.tasks);
  const [completedTask, setCompletedTask] = useState(taskStorage.completedTask);

  const updateTaskText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { text: taskText, id: new Date().getTime() }]);
  };
  const completeTask = (cTask) => {
    setCompletedTask([...completedTask, cTask]);
    setTasks(tasks.filter((el) => el.id !== cTask.id));
  };
  const removeTask = (cTask) => {
    setCompletedTask(tasks.filter((el) => el.id !== cTask.id));
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
