import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = (props) => {

    return (
        <div className="mb-2">
            <Navbar />
            <Link to="/addEmployee">
                <Button variant="primary" size="lg">
                    Add Employee
                </Button>
            </Link>

            <Link to="/getAllEmployees">
                <Button variant="primary" size="lg">
                    Employee List
                </Button>
            </Link>
        </div>
    );
}

export default Dashboard;