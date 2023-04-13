function Filter({ currentFilter, changeFilter, filters }) {
  const buttons = filters.map(({ filterName, label }) => {
    const active = currentFilter === filterName;
    const buttonClass = `btn ${active ? "btn-light" : "btn-outline-light"}`;
    const style = active ? { color: "black" } : null;
    return (
      <button
        onClick={() => changeFilter(filterName)}
        className={buttonClass}
        type="button"
        key={filterName}
        style={style}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group" style={{ marginTop: "20px" }}>
      {buttons}
    </div>
  );
}

export default Filter;
