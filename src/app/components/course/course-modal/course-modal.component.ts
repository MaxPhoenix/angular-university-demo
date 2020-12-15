import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/entities/course/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css']
})
export class CourseModalComponent implements OnInit {

  course : Course;

  constructor(public activeModal : NgbActiveModal,
              private courseService : CourseService) { 
      
    if(this.course === undefined || this.course === null)
        this.course = this.createEmptyInstructor();

  }


  ngOnInit(): void {
  }

  saveNew(){
    this.courseService.saveEntity(this.course)
          .subscribe(response => {
            this.activeModal.close();
          });
  }

  createEmptyInstructor() : Course{
    let student : Course = new Course(null, "");
    return student;
  }

}
