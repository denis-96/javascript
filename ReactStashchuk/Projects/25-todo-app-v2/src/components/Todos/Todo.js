import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ removeTodo, toggleTodo, id, text, isCompleted }) {
  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ""}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => removeTodo(id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(id)} />
    </div>
  );
}

export default Todo;
