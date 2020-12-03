import { BaseEntity } from '../base-entity';
import { FieldSortable } from '../field-sortable';
import { Instructor } from './intructor';

export class InstructorDetail extends BaseEntity{
    youtubeChannel : string;
    hobby          : string;
    instructor     : Instructor;


    constructor(id:number, youtubeChannel:string, hobby:string){
        super(id);
        this.youtubeChannel = youtubeChannel;
        this.hobby = hobby;
    }

    getOrderedFields(): any[] {
        return [this.youtubeChannel, this.hobby];
    }
}