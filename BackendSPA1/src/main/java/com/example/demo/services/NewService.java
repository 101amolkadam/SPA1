package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class NewService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public   void saveEmployee(Employee employee)
    {
        employeeRepository.save(employee);
    }
	
	public void deleteEmployee (Long id) {
		employeeRepository.deleteById(id);
	}

	public Employee updateEmployee(long id, Employee employee) {
		Optional<Employee> optionalEmployee=employeeRepository.findById(id);
		Employee e = optionalEmployee.get();
		
		if(employee.getFirstName()!=null)
        {
          e.setFirstName(employee.getFirstName());
        }
        
		if(employee.getLastName()!=null)
        {
          e.setLastName(employee.getLastName());
        }
		
		if(employee.getEmail_id()!=null)
        {
          e.setEmail_id(employee.getEmail_id());
        }

		employeeRepository.save(e);
		
		return e;
	}
}
