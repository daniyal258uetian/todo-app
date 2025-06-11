import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todos } = useContext(TodoItemContext);

  return todos.length === 0 && <p> Completed </p>;
};

export default WelcomeMessage;
