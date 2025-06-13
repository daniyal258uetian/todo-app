import { useContext, useRef, useState } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const TodoInput = () => {
  const { NewTodoItem } = useContext(TodoItemContext);
  const todoTitleElement = useRef("");
  const todoDateElement = useRef("");
  const [error, setError] = useState("");

  const newTodoadded = () => {
    const todoTitle = todoTitleElement.current.value;
    const todoDate = todoDateElement.current.value;
    if (!todoTitle || !todoDate) {
      setError("Both task title and date are required.");
      return;
    }
    NewTodoItem(todoTitle, todoDate);
    todoTitleElement.current.value = "";
    todoDateElement.current.value = "";
    setError("");
  };
  return (
    <div className="mb-4">
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          ref={todoTitleElement}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          placeholder="Select date"
          ref={todoDateElement}
          required
        />
      </div>

      <button className="btn btn-primary w-100" onClick={newTodoadded}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
