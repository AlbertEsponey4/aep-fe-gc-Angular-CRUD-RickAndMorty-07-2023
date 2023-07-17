import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  character: any = history.state.character;
  attributes: string[] = Object.keys(this.character);

  // metodo que devuelve los atributos de un objeto en un array. He tenido que hacer este método porque no me dejava poner directamente "Object.keys(obj)" en el HTML
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
