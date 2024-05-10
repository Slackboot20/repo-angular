import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { error } from 'console';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private readonly apiService: ApiService){}

  @Input()
  people: any;
  ApiService: any;

  delete(people: any) {
    console.log(this.people)

    this.ApiService.deletePeople(this.people.id)
    .subscribe((response: any) => { console.log(response);

    }, (error: any) => {
      console.error(error);
    });
  }

  onEditClick(){
    
  }
}
