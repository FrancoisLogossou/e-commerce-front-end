import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class GestionCommandeService {
  private url = 'http://localhost:3000/commande/';

  constructor(private http: HttpClient) { }

  updateStock(refArticle: number, qteStock: number) {
    return this.http.put<Article>(this.url+refArticle,{qteStock: qteStock});
  }
}
