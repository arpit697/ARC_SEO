import { Lexer } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearString'
})
export class ClearStringPipe implements PipeTransform {

  transform(value: string): string {
    let repHyphen = value.replace(/-/g," ");
    /* let newVal = repHyphen.replace(/\\"/g, '"') */
    let newVal = repHyphen.replace(/[^\w\s]/gi, ' > ')
    return newVal.charAt(1).toUpperCase() + newVal.slice(2);
  }

}
