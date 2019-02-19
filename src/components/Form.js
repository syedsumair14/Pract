import React from 'react';
import { connect } from 'react-redux';
import { add } from './actions'

class Form extends React.Component {

    addData = () => {
        alert("added")
    }

    state = {
        name: '',
        age: ''
    }
    onChange = (e) => {
        this.setState({
            name: e.target.value,
        }, () => {console.log("SET", this.state)})
    }
    onAgeChange = (e) => {
        this.setState({
            age: e.target.value
        }, () => {console.log("SET", this.state)})
    }

    addData = () => {
        this.props.add(this.state.name, this.state.age)
    }
    render() {
        console.log("form render",this.props)
        return (
            <div>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange={this.onAgeChange} />
                    </div>
                    <input type="submit" className="btn btn-success" onClick={this.addData} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {add})(Form);
