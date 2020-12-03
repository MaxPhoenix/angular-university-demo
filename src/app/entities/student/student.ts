import { KeyValue } from '@angular/common';
import { FieldSortable } from '../field-sortable';
import { Course } from '../course/course';
import { Person } from '../person/person';

export class Student extends Person{
    courses? : Course[];
    
    
}