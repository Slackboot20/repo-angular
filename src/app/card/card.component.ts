import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { error, info } from 'console';
import { response } from 'express';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private readonly apiService: ApiService){}

  @Input()
  Product: any;
  ApiService: any;

  ngOnInit(){console.log(this.Product)}

  delete() {
    console.log('Personaje eliminado con exito', this.Product)

    this.apiService.deleteCharacter(this.Product.id)
    .subscribe((response: any) => { console.log('personaje eliminado con exito: ', response);
    });
  }

  Edit(){
    console.log(this.Product)
  }
}
