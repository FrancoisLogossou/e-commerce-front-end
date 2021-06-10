import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = 'http://localhost:3000/creation/';

  constructor(private http: HttpClient) { }
  
  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  getOneById(idUser: number) {
    return this.http.get<Personne>(this.url + idUser);
  }
}