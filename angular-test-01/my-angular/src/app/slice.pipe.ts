import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  // {{text | slice}}
  // transform(value: string, ...args: unknown[]): unknown {
  //   return value.substr(0,20)+'...';
  // }

  // {{text | slice: 30}}
  transform(value: string): any {
    return value.substr(0,1).toUpperCase()+value.substr(1,value.length);
  }
}
