package com.aljo.springBootLearn.controller;

import com.aljo.springBootLearn.model.Student;
import com.aljo.springBootLearn.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StuController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    //public String add(@RequestBody Student student) {
    public List<Student> add(@RequestBody Student student) {
        studentService.saveStudent(student);
        //return "New student added";
        return studentService.getAllStudents();
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

}


