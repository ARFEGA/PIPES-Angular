import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
    value=value.toLocaleLowerCase();
    let lenguajes=value.split(' ');
    if(todas){
      lenguajes = lenguajes.map(lenguaje=>{
        return lenguaje[0].toUpperCase() + lenguaje.substr(1);
      })
      return lenguajes.join();
    }else{
      return lenguajes[0][0].toUpperCase() + lenguajes[0].substr(1) + ' ' + lenguajes[1] + ' ' + lenguajes[2];
    }
    
  }

}
