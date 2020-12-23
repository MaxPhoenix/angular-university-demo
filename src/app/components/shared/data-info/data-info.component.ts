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
  @Input() hasActions : boolean; 
  @Input() editable: boolean;
  @Input() viewable: boolean;
  @Input() deletable: boolean;
  @Input() hasAdditionalActions: boolean;


  @Output() event: EventEmitter<string>;
  @Output() addNewEvent : EventEmitter<any>;
  @Output() editEvent : EventEmitter<FieldSortable>;
  @Output() viewEvent : EventEmitter<FieldSortable>;
  @Output() deleteEvent : EventEmitter<FieldSortable>;
  @Output() additionalEvent : EventEmitter<FieldSortable>;



  constructor() { 
    this.event = new EventEmitter<string>();
    this.addNewEvent = new EventEmitter();
    this.editEvent = new EventEmitter();
    this.viewEvent = new EventEmitter();
    this.deleteEvent = new EventEmitter();
    this.additionalEvent = new EventEmitter();
  }

  ngOnInit(): void {

  }

  getData(filter:string){
    return this.event.emit(filter);
  }

  addNew(){
    return this.addNewEvent.emit();
  }

  editRegistry(cellRow : FieldSortable) {
    return this.editEvent.emit(cellRow);
  }

  viewRegistry(cellRow : FieldSortable) {
    return this.viewEvent.emit(cellRow);
  }

  deleteRegistry(cellRow : FieldSortable) {
    return this.deleteEvent.emit(cellRow);
  }

  makeOperationWithRegistry(cellRow : FieldSortable) {
    return this.additionalEvent.emit(cellRow);
  }
}
