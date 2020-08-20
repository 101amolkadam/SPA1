package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.services.NewService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://192.168.56.1:3000" })
//@RequestMapping("/employees")
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	NewService newService;

	
	@GetMapping("/getAllEmployees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

//	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/addEmployee")
	public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
		newService.saveEmployee(employee);
		return new ResponseEntity<String>("Employee is added", HttpStatus.OK);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
		newService.deleteEmployee(id);
		return new ResponseEntity<String>("Employee is deleted", HttpStatus.OK);
	}
	
	@GetMapping("/getEmployee/{id}")
	public Optional<Employee> getEmployee(@PathVariable Long id) {
		return employeeRepository.findById(id);
	}
	
	@PutMapping("/editEmployee/{id}")
	public Employee editEmployee(@PathVariable long id, @RequestBody Employee employee) {
		return newService.updateEmployee(id, employee);
	}
}
