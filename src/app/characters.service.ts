import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  // obtiene todos los personajes
  getCharacters(){
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  // obtiene un personaje
  getCharacter(id: number){
    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
