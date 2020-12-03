import { HttpClient } from '@angular/common/http';
import { BaseEntity } from 'src/app/entities/base-entity';
import { Injectable } from '@angular/core';
import { Course } from '../entities/course/course';
import { BaseServiceService } from './base-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseServiceService<Course> {


  constructor(protected httpClient : HttpClient) {
    super(httpClient);
    this.baseEndpoint = "api/course";
  }


  getCourses () : Observable<Course[]>{
    return this.getListData("")
              .pipe( map( response => response.map(course => this.mapCourse(course))));           
  }

  mapCourse(response: Course) : Course{
    let course : Course  =  new Course(response.id, response.title);
    course.reviews = response.reviews;
    return course;
  }
  
}
