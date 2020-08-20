import axios from 'axios';
import Table from '../components/Table';

const GetAllUSER_REST_API_URL = 'http://localhost:8080/employees/getAllEmployees';
const DeleteUSER_REST_API_URL  = 'http://localhost:8080/employees/deleteEmployee/';
const GetUSER_REST_API_URL = 'http://localhost:8080/employees/getEmployees';
class EmployeeService {

    getAllUser() {
        return axios.get(GetAllUSER_REST_API_URL);
    }

    deleteUser(id) {
        return axios.delete(DeleteUSER_REST_API_URL + id );
    }

    editUser(id) {
        return axios.put(GetUSER_REST_API_URL + id );
    }
}

export default new EmployeeService();