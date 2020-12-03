import { KeyValue } from '@angular/common';

export interface FieldSortable{
    getOrderedFields() : Array<any>;
}