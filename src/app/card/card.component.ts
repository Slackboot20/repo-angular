import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  closeEdit: any;
  constructor(private readonly apiService: ApiService){}

  @Input()
  Product: any;
  ApiService: any;
  modal=false

  title = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  images = new FormControl ('', Validators.required);

  ngOnInit(){
    this.title.setValue(this.Product.title)
    this.price.setValue(this.Product.price)
    this.description.setValue(this.Product.description)
    this.images.setValue(this.Product.images)

    console.log(this.Product)
    }

  delete() {
    console.log('Producto eliminado con exito', this.Product)

    this.apiService.deleteCharacter(this.Product.id)
    .subscribe((response: any) => { console.log('producto eliminado con exito: ', response);
    });
  }

  openEditModal(){
     this.modal=true
    }

  closeEditModal(){
    this.modal=false
  }

  saveChanges() {
    const editCharacter = {
      title: this.title.value,
      price: this.price.value,
      images: [this.images.value],
      description: this.description.value,
      
    }; console.log(editCharacter)

    this.apiService.editCharacter(this.Product.id, editCharacter)
    .subscribe(response => {console.log('actualizacion exitosa: ', response);
    Object.assign(this.Product, editCharacter);
    this.closeEdit();
  });
  }
}