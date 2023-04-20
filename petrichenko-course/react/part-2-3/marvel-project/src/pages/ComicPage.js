import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import useMarvelService from "../services/MarvelService";
import ComicBanner from "../components/Comics/ComicBanner";
import Comic from "../components/Comics/Comic";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

function ComicPage() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { loading, error, getComic } = useMarvelService();

  const loadComic = () => {
    getComic(comicId).then((comic) => setComic(comic));
  };

  useEffect(() => {
    loadComic();
  }, []);

  return (
    <>
      <ComicBanner />
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        comic && <Comic {...comic} />
      )}
    </>
  );
}

export default ComicPage;
