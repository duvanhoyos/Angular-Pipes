import { Component } from "@angular/core";
import { promise } from "protractor";
import { reject } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular-Pipes";

  nombre = "Alexander";
  nombre2 = "AlexAnder hoYos muñoz";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: { calle: "x", casa: "12" }
  };

  valorDePromesa = new Promise( ( resove, reject) => {
    setTimeout( () => resove('Llego la data!'), 3500 );
  })


  fecha = '2019-01-23';

  video = "x22PGIighO0";

}
