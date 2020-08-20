import React from 'react';
import './App.css';
import Table from './components/Table';
import Dashboard from './containers/Dashboard';
import AddEmployee from './components/Adduser1';
import Login1 from './components/Login1';
import EditEmployee from './components/EditUser';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch >
          <Route path="/" exact  component={Login1} />
          <Route path="/login" exact  component={Login1} />
          <Route path="/dashboard" exact  component={Dashboard} />
          <Route path="/getAllEmployees" exact  component={Table} />
          <Route path="/addEmployee" exact  component={AddEmployee} />
          <Route path='/editEmployee/:id' component={EditEmployee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
