import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import decoration from "./resources/img/vision.png";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ComicsPage from "./pages/ComicsPage";
import ComicPage from "./pages/ComicPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<ComicPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </Router>
  );
}

export default App;
