import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from '../interfaces/livre';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private url = 'http://localhost:3000/home/';

  constructor(private http: HttpClient) { }

  getAllPersonnes() {
    return this.http.get<Array<Livre>>(this.url);
  }

}
