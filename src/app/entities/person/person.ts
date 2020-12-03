import { KeyValue } from '@angular/common';
import { BaseEntity } from '../base-entity';

export class Person extends BaseEntity{
    firstName : string;
    lastName  : string;
    email     : string;

    getOrderedFields(): any[] {
        return [this.id, this.firstName, this.lastName, this.email];
    }

    constructor(id:number, firstName:string, lastName: string, email:string){
        super(id);
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email     = email;
    }
    
}