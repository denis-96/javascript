class MarvelService {
  #apiBaseUrl = "https://gateway.marvel.com:443/v1/public/";
  #apiKey = "2e9ee17fead394f8530840f46b85235d";
  #baseOffset = 210;

  getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    return await response.json();
  };

  getHeroes = async (limit, offset = this.#baseOffset) => {
    const response = await this.getData(
      `${this.#apiBaseUrl}characters?apikey=${
        this.#apiKey
      }&offset=${offset}&limit=${limit}`
    );
    return this.#transformResponseData(response);
  };

  getHero = async (id) => {
    const response = await this.getData(
      `${this.#apiBaseUrl}characters/${id}?apikey=${this.#apiKey}`
    );
    return this.#transformResponseData(response)[0];
  };

  #transformResponseData = (response) => {
    const heroes = response.data.results;

    return heroes.map((hero) => ({
      id: hero.id,
      name: hero.name,
      description: hero.description,
      thumbnail: hero.thumbnail.path + "." + hero.thumbnail.extension,
      homepage: hero.urls[0].url,
      wiki: hero.urls[1].url,
      comics: hero.comics.items,
    }));
  };
}

export default MarvelService;
