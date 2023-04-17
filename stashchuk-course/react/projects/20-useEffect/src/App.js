import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log('Callback in useEffect called');
    fetch("https://jsonplaceholder.typicode.com/todos/9")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  /**
   * Хук useEffect(функция, массив зависимостей)
   * 
   * Массив зависимостей указывает, когда вызывать переданную функцию
   * Если массив зависимостей пустой, то эта функция будет вызвана однократно,
   * при начальном рендеринге компонента
   * Если в массиве указаны какие-то переменные, то функция будет вызываться
   * при их изменении
   * 
   * Переданная функция должна возвращать
   * либо другую функцию либо undefined
   * Если возвращает другую функцию, то
   * возвращённая функция будет вызвана, когда React будет выполнять
   * unmount комопнента(удаление компонента из видимой части интерфейса)
   */


  console.log("App rendered");
  console.log(todo);

  return <div className="App">{todo?.title}</div>;
}

export default App;