import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private url = 'http://localhost:3000/connexion'
  constructor(private http: HttpClient) { }

  checkData(p: Personne){
    console.log(p);
    return this.http.post(this.url, p);
  }
}
