import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Navbar = (props) => {

    const myStyle = {
        paddingBottom: 50,
    }

    return (
        <div style = {myStyle}>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary" >
                <Link to="/dashboard">
                    <a class="navbar-brand" >Dashboard</a>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;