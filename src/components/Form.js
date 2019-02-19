import React from "react";
import { connect } from "react-redux";
import { add } from "./actions";

class Form extends React.Component {
  addData = () => {
    alert("added");
  };

  state = {
    name: "",
    age: "",
    nameError: "",
    ageError: ""
  };

  onChange = e => {
    this.setState(
      {
        name: e.target.value
      },
      () => {
        console.log("SET", this.state);
      }
    );
  };
  onAgeChange = e => {
    this.setState(
      {
        age: e.target.value
      },
      () => {
        console.log("SET", this.state);
      }
    );
  };

  validate = () => {
    let nameError = "";
    let ageError = "";
    if (!this.state.name) {
      nameError = "Error";
    }
    if (!this.state.age) {
      ageError = "Must be 18+";
    }
    if (nameError || ageError) {
      this.setState({
        nameError,
        ageError
      });
      return false;
    }
    return true;
  };

  addData = () => {
    const isValid = this.validate();
    if (isValid) {
      this.props.add(this.state.name, this.state.age);
      this.setState({
        name: "",
        age: ""
      });
      //For Routing
      this.props.history.push("/list");
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div class="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
              value={this.state.name}
              onChange={this.onChange}
            />
            <div>{this.state.nameError}</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
              value={this.state.age}
              onChange={this.onAgeChange}
            />
            <div>{this.state.ageError}</div>
          </div>
          <input
            type="submit"
            className="btn btn-success"
            onClick={this.addData}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { add }
)(Form);
