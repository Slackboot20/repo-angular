import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor, NgForOf } from '@angular/common';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  people = ["camila", "alejandra"]

  constructor (private api:ApiService){}
  ngOnInit(){
    this.api.getAllCharacters().subscribe((characters:any) => {
      console.log(characters);
      this.people = characters.results;
    })
  }
}
