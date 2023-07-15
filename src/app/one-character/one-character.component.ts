import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.css']
})
export class OneCharacterComponent {
  @Input() character: any;

  constructor(private router: Router) {}

  seeMore(character: any) {
    this.router.navigate(['/start-page/detail'], { state: { character } });
  }
}
