import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workersADM';

  titulo = "Exercicio Semana 3";

  worker = {
    id: 7, 
    nome: 'Nathan Carlos Exercicio', 
    salario: 4500, 
    cargo: 'Dev Pl'
  }
}
