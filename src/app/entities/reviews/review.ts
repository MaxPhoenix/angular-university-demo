import { BaseEntity } from 'src/app/entities/base-entity';
import { FieldSortable } from '../field-sortable';

export class Review extends BaseEntity{
    comment : string;

    constructor(id: number, comment : string){
        super(id);
        this.comment = comment;
    }
    
    getOrderedFields(): any[] {
        return [this.comment];
    }
}