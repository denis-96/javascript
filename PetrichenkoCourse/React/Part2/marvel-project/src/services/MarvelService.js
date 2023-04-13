class MarvelService {
  #apiBaseUrl = "https://gateway.marvel.com:443/v1/public/";
  #apiKey = "2e9ee17fead394f8530840f46b85235d";

  getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    return await response.json();
  };

  getAllCharacters = (offset, limit) => {
    return this.getData(
      `${this.#apiBaseUrl}characters?apikey=${
        this.#apiKey
      }&offset=${offset}&limit=${limit}`
    );
  };
  getCharacter = (id) => {
    return this.getData(
      `${this.#apiBaseUrl}characters/${id}?apikey=${this.#apiKey}`
    );
  };
}

export default MarvelService;
