import TodoItem from "./TodoItem";

export default function TodoList({ tasks, dispatch }) {
  console.log(tasks);
  return (
    <div>
      <ul>
        <TodoItem items={tasks} dispatch={dispatch} />
      </ul>
    </div>
  );
}
