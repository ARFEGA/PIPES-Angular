import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pwd'
})
export class PwdPipe implements PipeTransform {

  transform(value: string, auxPwd:boolean=true): string {
    return auxPwd ? '*'.repeat(value.length):value;
  }

}
