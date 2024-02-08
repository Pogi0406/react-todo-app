import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const taskReducer = (tasks, action) => {
  console.log(action);
  console.log(tasks);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];

    case "EDIT_TODO":
      return tasks.map((task) =>
        task.id === action.itemId ? { ...task, text: action.newText } : task
      );

    case "MARK_AS_DONE":
      return tasks.map((task) =>
        task.id === action.itemId ? { ...task, done: !task.done } : task
      );

    case "REMOVE_TODO":
      return tasks.filter((t) => t.id !== action.itemId);

    case "REMOVE_ALL":
      return [];

    default:
      return tasks;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <div className="container">
      <h1>My TODO list</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList dispatch={dispatch} tasks={tasks} />
    </div>
  );
}

export default App;
