import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  constructor(private http: HttpClient) {}

  characters:any = this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5").subscribe( result => this.characters = result );

}
