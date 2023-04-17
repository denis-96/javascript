import "./Employee.css";

function Employee(props) {
  const {
    name,
    salary,
    increased,
    rised,
    deleteHandler,
    toggleIncreaseHandler,
    toggleRiseHandler,
    changeSalary,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  classNames += increased ? " increase" : "";
  classNames += rised ? " like" : "";

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={toggleRiseHandler}
        style={{
          transition: "all",
          msTransition: "all",
        }}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={salary + "$"}
        onChange={(e) => changeSalary(parseInt(e.target.value))}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={toggleIncreaseHandler}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={deleteHandler}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default Employee;
