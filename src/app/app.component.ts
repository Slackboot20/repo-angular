import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ApiService } from './service/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent, NgForOf, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
  people = ["camila", "alejandra"]

  constructor (private api:ApiService){}

  Info: any;

  name = new FormControl('');
  image = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  ngOnInit(){
    this.api.getAllCharacters().subscribe((characters:any) => {
      console.log(characters);
      this.people = characters.results;
    })
  }

  onSummit (){
    const NewCharacter = {
      name: this.name.value,
      imagen: this.image.value,
      email: this.email.value,
      password: this.password.value
    }
  }
}