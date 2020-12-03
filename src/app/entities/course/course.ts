import { BaseEntity } from 'src/app/entities/base-entity';
import { FieldSortable } from '../field-sortable';
import { Review } from '../reviews/review';
import { Student } from '../student/student';

export class Course extends BaseEntity{
    title     : string;
    students? : Student[];
    reviews?  : Review[];

    constructor(id: number, title : string){
        super(id);
        this.title = title;
        this.reviews = [];
    }

    getOrderedFields(): any[] {
        return [this.id, this.title, this.reviews.length];
    }
}