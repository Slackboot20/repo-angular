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

  createCharacter(newCharacter: any){
    return this.http.post("https://api.escuela.js.co/api/v1/users", newCharacter)
  }

  editCharacter(){
    console.log('actualizado correctamente');
  }

  deleteCharacter(id: number){
    return this.http.delete(`https://api.escuelajs.co/api/v1/products${id}`)
  }
}
