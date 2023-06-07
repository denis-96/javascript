// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { useHttp } from "../../hooks/http.hook";
import { heroCreated } from "../../actions";

const HeroesAddForm = () => {
  const [heroData, setHeroData] = useState({
    name: "",
    description: "",
    element: "",
  });
  const filters = useSelector((state) => state.filters.filters);

  const dispatch = useDispatch();
  const { request } = useHttp();

  const setHeroAttr = (attr, value) => {
    setHeroData((heroData) => ({ ...heroData, [attr]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    request(
      `http://localhost:3001/heroes`,
      "POST",
      JSON.stringify({ ...heroData, id: uuid() })
    )
      .then((newHero) => dispatch(heroCreated(newHero)))
      .catch((e) => console.log(e));
    setHeroData({ name: "", description: "", element: "" });
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={heroData.name}
          onChange={(e) => setHeroAttr("name", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
          value={heroData.description}
          onChange={(e) => setHeroAttr("description", e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={heroData.element}
          onChange={(e) => setHeroAttr("element", e.target.value)}
        >
          <option>Я владею элементом...</option>
          {filters.length &&
            filters.map(
              (filter) =>
                filter.id !== "all" && (
                  <option key={filter.id} value={filter.id}>
                    {filter.title}
                  </option>
                )
            )}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
