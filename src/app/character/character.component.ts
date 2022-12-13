import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  character:any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.character = this.http.get("https://rickandmortyapi.com/api/character/"+id).subscribe( result => this.character = result );

}

}
