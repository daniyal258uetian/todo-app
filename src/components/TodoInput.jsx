import { useContext, useRef } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const TodoInput = () => {
  const { NewTodoItem } = useContext(TodoItemContext);
  const todoTitleElement = useRef("");
  const todoDateElement = useRef("");

  const newTodoadded = () => {
    const todoTitle = todoTitleElement.current.value;
    const todoDate = todoDateElement.current.value;
    NewTodoItem(todoTitle, todoDate);
    todoTitleElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <div className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          ref={todoTitleElement}
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          placeholder="Select date"
          ref={todoDateElement}
        />
      </div>

      <button className="btn btn-primary w-100" onClick={newTodoadded}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
