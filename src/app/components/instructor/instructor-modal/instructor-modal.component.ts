import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor } from './../../../entities/instructor/intructor';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { InstructorDetail } from 'src/app/entities/instructor/intructor-detail';

@Component({
  selector: 'app-instructor-modal',
  templateUrl: './instructor-modal.component.html',
  styleUrls: ['./instructor-modal.component.css']
})
export class InstructorModalComponent implements OnInit {

  instructor : Instructor;

  constructor(public activeModal : NgbActiveModal,
              private instructorService : InstructorService) { 
      
    if(this.instructor === undefined || this.instructor === null)
        this.instructor = this.createEmptyInstructor();

  }


  ngOnInit(): void {
  }

  saveNew(){
    this.instructorService.saveEntity(this.instructor)
          .subscribe(response => {
            this.activeModal.close();
          });
  }

  createEmptyInstructor() : Instructor{
    let instructor : Instructor = new Instructor(null, "", "", "");
    instructor.instructorDetail = new InstructorDetail(null, "", "");
    return instructor;
  }

}
