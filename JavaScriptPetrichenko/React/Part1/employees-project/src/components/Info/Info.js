import "./Info.css";

function Info({ totalEmployees, increasedEmployees }) {
  return (
    <div className="info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {increasedEmployees}</h2>
    </div>
  );
}

export default Info;
