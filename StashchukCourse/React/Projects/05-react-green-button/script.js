const App = ({initialButtonText, initialClassesList}) => {
  // useState - хук, позволяющий управлять состоянием
  // возвращает массив из двух элементов (состояние и функция для его изменения)
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classList, setClassList] = React.useState(initialClassesList)

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClassList([...initialClassesList, 'green-btn'])
  };

  return (
    <div className="app">
      <button className={classList.join(' ')} onClick={onButtonClick}>{buttonText}</button>
    </div>  
  );
};

const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me please" initialClassesList={['btn']} />);
