import { Review } from './../../entities/reviews/review';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entities/course/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  tableColumnNames : string[] = ["Id", "Tile", "Reviews"];
  tableRowsData : Course[] = [];
 

  constructor(private courseService : CourseService) { 
  
  }

  ngOnInit(): void {
  }

  getCourses(){
    this.courseService.getCourses()
            .subscribe( response => this.tableRowsData = response);
  }

  openNewModal(){
    
  }

}
