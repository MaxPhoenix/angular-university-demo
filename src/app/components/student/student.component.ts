import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentModalComponent } from './modal/student-modal/student-modal.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  tableColumnNames : string[] = ["Id", "First Name", "Last Name", "Email"];
  tableRowsData : Student[] = [];

  constructor(private studentService : StudentService,
              private modal : NgbModal) { 

  }

  ngOnInit(): void {
  }

  getStudents(filter: string){
      if(filter)
        this.studentService.getStudentsBy(filter)
              .subscribe( response => this.tableRowsData = response);  
     
      else
        this.studentService.getStudents()
              .subscribe( response => this.tableRowsData = response);
  }

  openNewModal(){
    this.modal.open(StudentModalComponent, { size: 'lg' });
    
  }

}
