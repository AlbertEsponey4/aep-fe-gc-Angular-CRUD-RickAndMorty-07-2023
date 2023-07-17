import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters: any = null;

  constructor(private charactersService: CharactersService) {}

  // Si no tipo el result a any, no funciona
  ngOnInit() {
    this.charactersService.getCharacters().subscribe((result: any) => this.characters = result.results); //hay que poner result.results porque este endpoint devuelve más objetos que los personajes, pero los personajes están en el objeto result.
  }
}
