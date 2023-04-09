import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className={styles.container}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            {...todo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
