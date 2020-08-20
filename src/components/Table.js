import React from 'react';
import UserService from '../services/UserService';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';




class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        UserService.getAllUser().then((response) => {
            this.setState({ users: response.data })
        });
    }

    deleteEmployee(e) {
        UserService.deleteUser(e.target.id).then((response) => {
            console.log(e.target.id +" Deleted Successfully")
        });
    }

    render() {
        return (
            <div>
                <Navbar />

                <Container>
                <Row>
                    <Col sm={8}><h1 className="text-justify"> Employee List</h1></Col>
                    <Col sm={4}>
                        <Link to="/addEmployee">
                            <Button variant="primary float-right" size="lg">
                                Add Employee
                            </Button>
                        </Link>
                    </Col>
                </Row>
                </Container>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email ID</td>
                            <td>Edit Employee</td>
                            <td>Delete Employee</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email_id}</td>
                                        <td>
                                            {/* <button id={user.id} onClick={this.editEmployee} >Edit</button> */}
                                            <Link to={`/editEmployee/${user.id}`} class="btn btn-success">Edit</Link>&nbsp;
                                        </td>
                                        <td>
                                            <button id={user.id} onClick={this.deleteEmployee}>Delete<Link to="/getAllEmployees"></Link></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;