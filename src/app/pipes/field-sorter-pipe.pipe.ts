import { BaseEntity } from 'src/app/entities/base-entity';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSorterPipe'
})
export class FieldSorterPipePipe implements PipeTransform {

  transform(value: BaseEntity): any[] {
    return value.getOrderedFields();
  }

}
