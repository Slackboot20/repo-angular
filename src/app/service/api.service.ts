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
    return this.http.post(URL, products)
  }

  editCharacter(id: number, product: any){
    return this.http.put(`https://api.escuelajs.co/api/v1/products/${id}`, product)
  }

  deleteCharacter(id: number){
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
