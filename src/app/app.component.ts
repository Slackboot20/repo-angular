import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit{
  apiUrl = 'https://api.escuelajs.co/api/v1/products';
  products: any[] = [];
  tittle = 'repo-angular';
  product: any = [];

  title = new FormControl('');
  images = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  categoryid = new FormControl('');

  constructor(private apiService:ApiService){}

  onSummit() {
    const NewProduct = {
      title: this.title.value,
      price: this.price.value,
      description: this.description.value,
      images: [this.images.value],
      categoryId: 4
    }
    
    this.apiService.createCharacter(NewProduct).subscribe((data: any) => {
      console.log('editado', data);
      this.product.push(data);
    })
  }

  ngOnInit(): void{
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
      this.products = data;
    })
  }
}