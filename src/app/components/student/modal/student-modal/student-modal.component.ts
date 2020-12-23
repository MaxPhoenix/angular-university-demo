import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/entities/student/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {

  student : Student;

  constructor(public activeModal: NgbActiveModal,
             private studentService : StudentService) { 

    
  
  }

  ngOnInit(): void {
    if(this.student === undefined || this.student === null)
       this.student = this.createEmptyStudent();
    else
       this.getStudentById(this.student.id);   
  }
  
  getStudentById(id: number){
    this.studentService.getStudentById(id)
              .subscribe(studentResponse => this.student = studentResponse);
  }

  saveNew(){
    this.studentService.saveEntity(this.student)
          .subscribe(response => {
            this.activeModal.close();
          });
  }

  createEmptyStudent() : Student{
    let student : Student = new Student(null, "", "", "");
    return student;
  }

}
