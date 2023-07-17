import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.css']
})
export class OneCharacterComponent {
  @Input() characterID: any;
  character: any;

  constructor(private router: Router, private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.getCharacter(this.characterID).subscribe(result => this.character = result); 
  }

  // le paso el perosnaje mediante el estado al componente detail
  seeMore(character: any) {
    this.router.navigate(['/start-page/detail'], {state: {character}});
  }
}
