import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes-Angular';
  nombre:string="Angular";
  numeros=[1,2,3,4,5,6,7,8,9,10];
  PI:string=Math.PI.toString() ;
  porcentaje:string="0.234";
  money:number=50.43;
  europa={
    españa:{
    capital:"Madrid",
    idioma:"Castellano"
    },
    italia:{
      capital:"Roma",
    idioma:"Italiano"
    }
  };

  miPromesa=new Promise<string>((resolve) =>{
  setTimeout(() => {
    resolve("This is EUROPE")
    }, 4500);
  })
}
