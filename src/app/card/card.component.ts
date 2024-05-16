import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { error } from 'console';
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
  people: any;

  delete(people: any) {
    console.log(this.people)

    this.apiService.editCharacter()
    // .subscribe((response: any) => { console.log('personaje eliminado con exito: ', response);
    // });
  }

  Edit(name: string){
    console.log(this.people)
    this.apiService.editCharacter()
    // .subscribe((response: any) => { console.log(response);
    // });
  }
}
