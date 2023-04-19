import "./App.scss";

import decoration from "./resources/img/vision.png";

import Header from "./components/Header/Header";
import Heroes from "./components/Heroes/Heroes";
import Comics from "./components/Comics/Comics";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        {/* <Heroes /> */}
        <Comics />
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
}

export default App;
