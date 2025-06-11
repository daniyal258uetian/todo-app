import { useContext } from "react";
import { toast } from "react-toastify";
import { TodoItemContext } from "../store/todo-items-store";
const TodoItem = ({ title, date }) => {
  const { DeleteTodo } = useContext(TodoItemContext);
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center`}
    >
      <div className="me-auto">
        <div className="fw-bold">{title}</div>
        <small className="text-muted">{date}</small>
      </div>
      <button
        onClick={() => {
          DeleteTodo(title);
          toast(`${title} deleted`);
        }}
        className="btn btn-sm btn-outline-danger ms-3"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
