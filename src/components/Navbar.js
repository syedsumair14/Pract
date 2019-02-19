import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  state = {
    value: "",
    searchResults: ""
  };

  searchValue = e => {
    this.setState({ value: e.target.value });
  };
  search = e => {
    e.preventDefault();
    let map = this.props.Data.filter(item =>
      item.name.toLowerCase().includes(this.state.value.toLowerCase())
    );
    this.setState({ searchResults: map }, () => {
      console.log("SEARCHED", this.state.searchResults);
    });
  };

  render() {
    return (
      <div>
        <div class="navbar navbar-light bg-light justify-content-between">
          <NavLink exact class="navbar-brand" to="/">
            Home
          </NavLink>
          <NavLink exact class="navbar-item" to="/list">
            Show List
          </NavLink>
          <NavLink exact class="navbar-item" to="/form">
            Form
          </NavLink>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.searchValue}
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              onClick={this.search}
            >
              Search
            </button>
          </form>
        </div>
        {this.state.searchResults ? this.state.searchResults.map(item => {
              return <div>{item.name}</div>;
            })
          : "null"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.reducer;
};
export default connect(mapStateToProps)(Navbar);
