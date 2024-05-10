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
people: any;
  title(title: any) {
    throw new Error('method not implemented');
  }

  constructor(private apiService:ApiService){}

  Info: any;

  name = new FormControl('');
  image = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  ngOnInit(){
    this.apiService.getCharacters().subscribe((data:any) => {
      this.Info = data.results;
    })
  }

  saveChanges() {
    console.log('saving changes: ', this.name, this.image, this.email,this.password)

    const NewCharacter = {
      "name": this.name.value,
      "imagen": this.image.value,
      "email": this.email.value,
      "password": this.password.value
    }
  }
}