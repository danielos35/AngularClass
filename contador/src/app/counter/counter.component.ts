import { Component } from "@angular/core";

// Decorador
@Component({

    selector:"app-contador",
    templateUrl: "./counter.component.html"

})

// Exportar componente
export class CounterComponent{
    contador:number = 0;
    add(){
      this.contador++;
    }
 
    minus(){
      this.contador--; 
    }

}