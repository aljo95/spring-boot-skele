package com.aljo.springBootLearn.service;

import java.util.List;
import com.aljo.springBootLearn.model.Student;
import com.aljo.springBootLearn.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImplement implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }


    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
