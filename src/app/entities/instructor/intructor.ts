import { Course } from './../course/course';
import { InstructorDetail } from './intructor-detail';
import { Person } from '../person/person';

export class Instructor extends Person{
    instructorDetail : InstructorDetail;
    courses?         : Course[];

    getOrderedFields(): any[] {
        let dataToRender = super.getOrderedFields();
        let instructorDetailData = this.instructorDetail.getOrderedFields();
        return dataToRender.concat(instructorDetailData);
    }
}