import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructorService } from './../../services/instructor.service';
import { InstructorDetail } from './../../entities/instructor/intructor-detail';
import { Instructor } from './../../entities/instructor/intructor';
import { Component, OnInit } from '@angular/core';
import { InstructorModalComponent } from './instructor-modal/instructor-modal.component';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  tableColumnNames : string[] = ["Id", "First Name", "Last Name", "Email", "Youtube Channel", "Hobby"];
  tableRowsData : Instructor[] = [];

  
  constructor(private instructorService: InstructorService,
              private ngModal : NgbModal) {
    
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
    this.ngModal.open(InstructorModalComponent, {size : "lg"});    
  }

}
