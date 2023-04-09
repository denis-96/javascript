import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          value={todo}
          type="text"
          placeholder="Enter new todo"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
