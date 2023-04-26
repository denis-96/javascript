import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import decoration from "./resources/img/vision.png";

import Header from "./components/Header/Header";
import Spinner from "./components/UI/Spinner";

// Динамические импорты всегда должны быть после обычных
const MainPage = lazy(() => import("./pages/MainPage"));
const ComicsPage = lazy(() => import("./pages/ComicsPage"));
const ComicPage = lazy(() => import("./pages/ComicPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:comicId" element={<ComicPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </Router>
  );
}

export default App;
