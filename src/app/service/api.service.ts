import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getCharacters(){
    return this.http.get(URL);
  }

  createCharacter(products: any){
    return this.http.post("https://api.escuelajs.co/api/v1/products/", products)
  }

  editCharacter(){
    return this.http
    console.log('actualizado correctamente');
  }

  deleteCharacter(id: number){
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
