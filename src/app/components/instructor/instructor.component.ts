import { InstructorService } from './../../services/instructor.service';
import { InstructorDetail } from './../../entities/instructor/intructor-detail';
import { Instructor } from './../../entities/instructor/intructor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  tableColumnNames : string[] = ["Id", "First Name", "Last Name", "Email", "Youtube Channel", "Hobby"];
  tableRowsData : Instructor[] = [];

  
  constructor(private instructorService: InstructorService) {
    
   }

  ngOnInit(): void {
  }

  getInstructors(filter : string){
    if(filter)
      this.instructorService.getInstructorsBy(filter)
            .subscribe( response => this.tableRowsData = response);
    else
      this.instructorService.getInstructors()
            .subscribe( response => this.tableRowsData = response);
    
  }

  openNewModal(){
    
  }

}
