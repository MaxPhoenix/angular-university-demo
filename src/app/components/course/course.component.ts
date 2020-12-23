import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Review } from './../../entities/reviews/review';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entities/course/course';
import { CourseService } from 'src/app/services/course.service';
import { CourseModalComponent } from './course-modal/course-modal.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  tableColumnNames : string[] = ["Id", "Tile", "Reviews", "Acciones"];
  tableRowsData : Course[] = [];
 

  constructor(private courseService : CourseService,
             private modal : NgbModal) { 
  
  }

  ngOnInit(): void {
  }

  getCourses(){
    this.courseService.getCourses()
            .subscribe( response => this.tableRowsData = response);
  }

  openNewModal(){
    this.modal.open(CourseModalComponent);
  }

}
