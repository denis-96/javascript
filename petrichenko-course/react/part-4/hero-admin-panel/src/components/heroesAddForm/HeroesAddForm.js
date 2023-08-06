import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { useCreateHeroMutation } from "../../api/apiSlice";

const HeroesAddForm = () => {
  const [heroData, setHeroData] = useState({
    name: "",
    description: "",
    element: "",
  });
  const filters = useSelector((state) => state.filters.filters);

  const [createHero, { isLoading }] = useCreateHeroMutation();

  const setHeroAttr = (attr, value) => {
    setHeroData((heroData) => ({ ...heroData, [attr]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createHero({ ...heroData, id: uuid() }).unwrap();
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

      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
