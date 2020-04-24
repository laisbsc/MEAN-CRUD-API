import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8081/api/books'

@Injectable({
  providedIn: 'root'
})

export class BookstoreService {

  constructor(private http:HttpClient) { }

  //returns the list of books in the inventory
  getAll(){
    return this.http.get(baseUrl);
  }

  //returns a book base on the id provided as search parameter
  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }

  //inserts books in the inventory
  create(data){
    return this.http.post(baseUrl, data);
  }

  //updates a book item by given id and update value
  update(id, data){
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //deletes one book item given its parameter id
  delete(id){
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(){
    return this.http.delete(baseUrl);
  }

  findByTitle(title){
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
