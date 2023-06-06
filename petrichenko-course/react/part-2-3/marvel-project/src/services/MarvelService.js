import { useCallback } from "react";
import useHttp from "../hooks/useHttp";

const _transformHeroesData = (data) => {
  const heroes = data.data.results;

  return heroes.map((hero) => ({
    id: hero.id,
    name: hero.name,
    description: hero.description || "There is no description",
    thumbnail: hero.thumbnail.path + "." + hero.thumbnail.extension,
    homepage: hero.urls[0].url,
    wiki: hero.urls[1].url,
    comics: hero.comics.items,
  }));
};

const _transformComicsData = (data) => {
  const comics = data.data.results;
  return comics.map((comic) => ({
    id: comic.id,
    title: comic.title,
    description: comic.description || "There is no description",
    pageCount: comic.pageCount
      ? `${comic.pageCount} p.`
      : "No information about the number of pages",
    thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    language: comic.textObjects[0]?.language || "en-us",
    price: comic.prices[0].price
      ? `${comic.prices[0].price}$`
      : "not available",
  }));
};

function useMarvelService() {
  const { process, succeedProcess, makeRequest, clearError } = useHttp();

  const apiBaseUrl = "https://gateway.marvel.com:443/v1/public/";
  const apiKey = "2e9ee17fead394f8530840f46b85235d";

  const getHeroes = useCallback(
    async (offset, limit = 9) => {
      const response = await makeRequest(
        `${apiBaseUrl}characters?apikey=${apiKey}&offset=${offset}&limit=${limit}`
      );
      return _transformHeroesData(response);
    },
    [makeRequest]
  );

  const getHero = useCallback(
    async (id) => {
      const response = await makeRequest(
        `${apiBaseUrl}characters/${id}?apikey=${apiKey}`
      );
      return _transformHeroesData(response)[0];
    },
    [makeRequest]
  );

  const getComics = useCallback(
    async (offset, limit = 8) => {
      const response = await makeRequest(
        `${apiBaseUrl}comics?apikey=${apiKey}&offset=${offset}&limit=${limit}&orderBy=issueNumber`
      );
      return _transformComicsData(response);
    },
    [makeRequest]
  );

  const getComic = useCallback(
    async (id) => {
      const response = await makeRequest(
        `${apiBaseUrl}comics/${id}?apikey=${apiKey}`
      );
      return _transformComicsData(response)[0];
    },
    [makeRequest]
  );

  return {
    process,
    succeedProcess,
    getHero,
    getHeroes,
    getComics,
    getComic,
    clearError,
  };
}

export default useMarvelService;
