import { FieldSortable } from './field-sortable';

export abstract class BaseEntity implements FieldSortable{
    id:number;

    constructor(id:number) {
        this.id = id;
    }

    abstract getOrderedFields() : Array<any>;
    
}