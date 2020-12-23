import { Course } from './../course/course';
import { InstructorDetail } from './intructor-detail';
import { Person } from '../person/person';

export class Instructor extends Person{
    instructorDetail : InstructorDetail;
    courses?         : Course[];

    getOrderedFields(): any[] {
        let dataToRender = super.getOrderedFields();
        if(this.instructorDetail !== null && this.instructorDetail){
            let instructorDetailData = this.instructorDetail.getOrderedFields();
            dataToRender = dataToRender.concat(instructorDetailData);
        }
        else 
            dataToRender = dataToRender.concat("-", "-")
        return dataToRender;
    }
}