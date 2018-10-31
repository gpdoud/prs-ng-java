import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBoolean: boolean): string {
    return aBoolean ? "Yes" : "No";
  }

}
