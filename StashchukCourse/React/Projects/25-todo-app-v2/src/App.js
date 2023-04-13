import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodosActions from "./components/Todos/TodosActions";
import TodoList from "./components/Todos/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    const newTodo = {
      id: Math.random().toString(36).substring(2, 12),
      text: todoText,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.reduce(
    (prev, next) => prev + next.isCompleted,
    0
  );

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }!`}</h2>
      )}
    </div>
  );
}

export default App;
