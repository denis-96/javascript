import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  inputChangeHandler = (e) => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery });
    this.props.changeSearch(e.target.value);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        value={this.state.searchQuery}
        onChange={this.inputChangeHandler}
      />
    );
  }
}

export default Search;
