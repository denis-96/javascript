import { useState, useEffect } from "react";
import "./ComicsList.scss";

import useMarvelService from "../../services/MarvelService";
import getContent from "../../utils/getContent";

import ComicCard from "./ComicCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";

function ComicsList() {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [allComicsLoaded, setAllComicsLoaded] = useState(false);

  const { process, succeedProcess, getComics } = useMarvelService();

  const updateComicsList = () => {
    getComics(offset).then(onComicsLoaded).then(succeedProcess);
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
      {getContent(
        process,
        () => (
          <ComicsGrid comics={comics} />
        ),
        Spinner,
        () => (
          <>
            <ComicsGrid comics={comics} />
            <Spinner />
          </>
        )
      )}
      <Button
        style={{ display: allComicsLoaded ? "none" : "block" }}
        onClick={updateComicsList}
        disabled={process === "loading"}
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
          id={comic.id}
          title={comic.title}
          price={comic.price}
          thumbnail={comic.thumbnail}
        />
      ))}
    </ul>
  );
}

export default ComicsList;
