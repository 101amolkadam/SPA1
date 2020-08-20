import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/employees/getEmployee/' + this.props.match.params.id)
            .then(res => {
                this.setState({ users: res.data });
                console.log(this.state.users);
            });
    }

    onChange = (e) => {
        const state = this.state.users
        state[e.target.name] = e.target.value;
        this.setState({ users: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email_id } = this.state.users;

        axios.put('http://localhost:8080/employees/editEmployee/' + this.props.match.params.id, { firstName, lastName, email_id })
            .then((result) => {
                alert('updated');
            });
    }

    render() {
        return (
            <div >
                <Navbar />
                <div class="panel panel-default" >
                    <div class="panel-heading ">
                        <h3 class="panel-title">
                            EDIT Employee
                         </h3>
                    </div>
                    <div class="panel-body  mx-auto" style={{width: 1000}}>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="name">FirstName:</label>
                                <input type="text" class="form-control " name="firstName" value={this.state.users.firstName} onChange={this.onChange} placeholder="FirstName" />
                            </div>
                            <div class="form-group">
                                <label for="title">LastName:</label>
                                <input type="text" class="form-control" name="lastName" value={this.state.users.lastName} onChange={this.onChange} placeholder="LastName" />
                            </div>

                            <div class="form-group">
                                <label for="description">Email:</label>
                                <input type="email" class="form-control" name="email_id" value={this.state.users.email_id} onChange={this.onChange} placeholder="Email Address" />
                            </div>
                            <button type="submit" class="btn btn-default"><Link to={`/getAllEmployees`} class="btn btn-success">Edit</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditEmployee;