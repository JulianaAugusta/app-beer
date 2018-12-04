import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pontoEVirgula'
})
export class PontoEVirgulaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
      return null;
    return value.replace('.', ',')

  }

}
