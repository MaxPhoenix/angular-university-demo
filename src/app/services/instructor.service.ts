import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../entities/instructor/intructor';
import { BaseServiceService } from './base-service.service';
import { InstructorDetail } from '../entities/instructor/intructor-detail';

@Injectable({
  providedIn: 'root'
})
export class InstructorService extends BaseServiceService<Instructor>{

  constructor(protected httpClient : HttpClient) {
    super(httpClient);
    this.baseEndpoint = "api/instructor";
  }

  
  getInstructors () : Observable<Instructor[]>{
    return this.getListData("")
              .pipe( map( response => response.map(instructor => this.mapInstructor(instructor))));           
  }

  getInstructorsBy (filter : string) : Observable<Instructor[]>{
    return this.getListData(`?name=${filter}`)
              .pipe( map( response => response.map(student => this.mapInstructor(student))));           
  }

  mapInstructor(response: Instructor) : Instructor{
    let instructor : Instructor  =  new Instructor(response.id, response.firstName, response.lastName, response.email);
    instructor.instructorDetail = this.mapInstructorDetail(response.instructorDetail);
    return instructor;
  }

  mapInstructorDetail(instructorDetailResponse : InstructorDetail): InstructorDetail{
    let instructorDetail : InstructorDetail  =  new InstructorDetail(instructorDetailResponse.id, instructorDetailResponse.youtubeChannel, instructorDetailResponse.hobby);
    return instructorDetail;
  }
}
