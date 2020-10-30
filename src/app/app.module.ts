import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Configuración paquete localize
//Hay que instalar desde el terminal:
// ng add @angular/localize       <= Con esta instalación hemos  cargado todos los idiomas, pero luego hay que registrarlos para poder ser utilizados, como se indica seguidamente.
import { registerLocaleData } from '@angular/common';
import  localEs  from '@angular/common/locales/es';

//Después:
registerLocaleData(localEs);
//Finalmente añadir LOCALE_ID a los providers
//Para el idioma francés (luego podremos indicar mediante el pipe date utilizando el parametro fr, que muestre en frances, por ejemplo)
import  localFr  from '@angular/common/locales/fr';
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
