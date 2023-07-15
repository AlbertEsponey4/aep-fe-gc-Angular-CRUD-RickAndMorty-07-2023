import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  character: any = history.state.character;
  attributes: string[] = Object.keys(this.character);


}
