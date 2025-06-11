import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";

const TodoList = () => {
  const { todos } = useContext(TodoItemContext);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.title} date={todo.date} title={todo.title} />
      ))}
    </ul>
  );
};

export default TodoList;
