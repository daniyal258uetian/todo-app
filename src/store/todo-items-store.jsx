import { createContext, useReducer } from "react";

export const TodoItemContext = createContext({
  todos: [],
  NewTodoItem: () => {},
  DeleteTodo: () => {},
});

const todoItemsReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    let newTodo = {
      title: action.payload.todoTitle,
      date: action.payload.todoDate,
    };

    newTodoItems = [...currTodoItem, newTodo];
  } else if (action.type === "DEL_ITEM") {
    newTodoItems = currTodoItem.filter(
      (i) => i.title !== action.payload.todoTitle
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todos, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const NewTodoItem = (todoTitle, todoDate) => {
    if (!todoTitle.trim()) return;
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        todoTitle,
        todoDate,
      },
    };
    dispatchTodoItems(newTodoAction);
  };

  const DeleteTodo = (todoTitle) => {
    const delTodoAction = {
      type: "DEL_ITEM",
      payload: {
        todoTitle: todoTitle,
      },
    };
    dispatchTodoItems(delTodoAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todos,
        NewTodoItem,
        DeleteTodo,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContextProvider;
