package com.aljo.springBootLearn.service;

import com.aljo.springBootLearn.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();



}
