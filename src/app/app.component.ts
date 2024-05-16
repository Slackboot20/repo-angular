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

  }

  constructor(private apiService:ApiService){}

  Info: any;

  id = new FormControl('');
  image = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  titulo = new FormControl('');

  saveChanges() {
    console.log('cambios guardados con exito: ', this.id, this.image, this.price, this.description, this.titulo)

    const NewCharacter = {
      "id": this.id.value,
      "price": this.price.value,
      "description": this.description.value,
      "image": this.image.value,
      "titulo": this.titulo.value
    }
  }

  ngOnInit(){
    this.apiService.getCharacters().subscribe((data:any) => {
      data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        
        
        });
      this.Info = data;

    })
  }
}