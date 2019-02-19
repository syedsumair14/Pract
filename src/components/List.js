import React from "react";
import { connect } from "react-redux";
import { edit, del } from './actions';

class List extends React.Component {
  state = {
    showEditFields: false,
    nameUpdated: '',
    ageUpdated: '',
    index: ''
  }
  del = i => {
    alert("del");
    this.props.del(i);
  };

  edit = i => {
    this.setState({ showEditFields: true, index: i });
  };
  update = (i) => {
    this.setState({
        showEditFields : false
    });
    this.props.edit(this.state.index, this.state.nameUpdated, this.state.ageUpdated);
  }
  onChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
      });
  }
  render() {
    console.log(this.props);
    const mapList = () => {
      return this.props.Data.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.del.bind(this, i)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={this.edit.bind(this, i)}
            >
              Edit
            </button>
          </tr>
        );
      });
    };
    return (
      <div>
          {this.state.showEditFields ? (
          <form>
            <input type="text" id='nameUpdated' onChange={this.onChange} value={this.state.nameUpdated} />
            <input type="text" id='ageUpdated' onChange={this.onChange}  value={this.state.ageUpdated} />
            <input type="button" value="update" onClick={this.update} />
          </form>
        ) : null}
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last N</th>
            </tr>
          </thead>
          <tbody>{mapList()}</tbody>
        </table>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  let receivedState = state.reducer;
  return receivedState;
};
export default connect(
  mapStateToProps,
  { del ,edit }
)(List);
