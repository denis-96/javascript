import { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "all",
    };
  }

  buttonClickHandler = (e, filter) => {
    this.setState({ selectedFilter: filter });
    this.props.changeFilter(filter);
  };

  getButtonClassList = (buttonFilterType) => {
    return `btn ${
      buttonFilterType === this.state.selectedFilter
        ? "btn-light"
        : "btn-outline-light"
    }`;
  };

  render() {
    return (
      <div className="btn-group" style={{ marginTop: "20px" }}>
        <button
          onClick={(e) => this.buttonClickHandler(e, "all")}
          className={this.getButtonClassList("all")}
          type="button"
        >
          Все сотрудники
        </button>
        <button
          onClick={(e) => this.buttonClickHandler(e, "forRise")}
          className={this.getButtonClassList("forRise")}
          type="button"
        >
          На повышение
        </button>
        <button
          onClick={(e) => this.buttonClickHandler(e, "salaryOverThousand")}
          className={this.getButtonClassList("salaryOverThousand")}
          type="button"
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default Filter;
