import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import useMarvelService from "../services/MarvelService";
import getContent from "../utils/getContent";

import ComicBanner from "../components/Comics/ComicBanner";
import Comic from "../components/Comics/Comic";
import Spinner from "../components/UI/Spinner";

function ComicPage() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { process, succeedProcess, getComic } = useMarvelService();

  const loadComic = () => {
    getComic(comicId)
      .then((comic) => setComic(comic))
      .then(succeedProcess);
  };

  useEffect(() => {
    loadComic();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>{comic ? comic.title : "Marvel information portal"}</title>
      </Helmet>
      <ComicBanner />
      {getContent(
        process,
        () => (
          <Comic {...comic} />
        ),
        Spinner
      )}
    </>
  );
}

export default ComicPage;
