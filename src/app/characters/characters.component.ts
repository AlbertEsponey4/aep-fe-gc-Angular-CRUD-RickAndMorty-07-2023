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
    this.characters = this.charactersService.retornar();
  }
}
