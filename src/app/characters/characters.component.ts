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

  ngOnInit() {
    this.charactersService.getCharacters().subscribe((result: any) => this.characters = result.results); //hay que poner result.results porque este endpoint devuelve más informacion que los personajes, pero los personajes están en result.
  }
}
