import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FieldSortable } from 'src/app/entities/field-sortable';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css']
})
export class DataInfoComponent implements OnInit {

  @Input() tableColumnNames : string[] = []; 
  @Input() tableRowsData : FieldSortable[] = []; 

  @Output() event: EventEmitter<string>;
  @Output() addNewEvent : EventEmitter<any>;

  constructor() { 
    this.event = new EventEmitter<string>();
    this.addNewEvent = new EventEmitter();
  }

  ngOnInit(): void {

  }

  getData(filter:string){
    return this.event.emit(filter);
  }

  addNew(){
    return this.addNewEvent.emit();
  }

}
