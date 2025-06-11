import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import WeatherInfo from "./components/WeatherInfo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

const App = () => {
  const notify = (todoTitle) => toast(`${todoTitle} delete `);

  return (
    <TodoItemsContextProvider>
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow w-100" style={{ maxWidth: "500px" }}>
          <WeatherInfo />
          <div className="card-body">
            <h2 className="card-title text-center mb-4 text-primary border-bottom pb-2">
              📝 Todo App
            </h2>
            <ToastContainer />
            <TodoInput />
            <WelcomeMessage />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoItemsContextProvider>
  );
};

export default App;
