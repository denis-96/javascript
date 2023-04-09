import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, removeTodo }) {
  return (
    <div className={styles.container}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
