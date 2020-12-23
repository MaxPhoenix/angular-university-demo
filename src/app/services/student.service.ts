import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../entities/student/student';
import { BaseServiceService } from './base-service.service';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseServiceService<Student>{

  constructor(protected httpClient : HttpClient) {
    super(httpClient);
    this.baseEndpoint = "api/student";
  }

  getStudents () : Observable<Student[]>{
    return this.getListData("")
              .pipe( map( response => response.map(student => this.mapStudent(student))));           
  }

  getStudentsBy (filter : string) : Observable<Student[]>{
    return this.getListData(`?name=${filter}`)
              .pipe( map( response => response.map(student => this.mapStudent(student))));           
  }

  getStudentById(id: number) : Observable<Student>{
    return this.getEntityById(id);
  }

  mapStudent(response: Student) : Student{
    let student : Student  =  new Student(response.id, response.firstName, response.lastName, response.email);
    student.courses = response.courses;
    return student;
  }


}
