import { useState, useEffect } from "react";
import "./ComicsList.scss";

import useMarvelService from "../../services/MarvelService";

import ComicCard from "./ComicCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

function ComicsList() {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [allComicsLoaded, setAllComicsLoaded] = useState(false);

  const { loading, error, getComics } = useMarvelService();

  const updateComicsList = () => {
    getComics(offset).then(onComicsLoaded);
  };

  useEffect(() => {
    updateComicsList();
  }, []);

  const onComicsLoaded = (loadedComics) => {
    setComics((comics) => [...comics, ...loadedComics]);
    setOffset((offset) => offset + loadedComics.length);
    setAllComicsLoaded(loadedComics.length < 8);
  };

  return (
    <div className="comics__list">
      {error ? <ErrorMessage /> : <ComicsGrid comics={comics} />}
      {loading && <Spinner />}
      <Button
        style={{ display: allComicsLoaded ? "none" : "block" }}
        onClick={updateComicsList}
        disabled={loading}
        text="load more"
        type="main"
        isLong
      />
    </div>
  );
}

function ComicsGrid({ comics }) {
  return (
    <ul className="comics__grid">
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          title={comic.title}
          price={comic.price}
          thumbnail={comic.thumbnail}
        />
      ))}
    </ul>
  );
}

export default ComicsList;
