import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:3000/home/';
  private url2 = 'http://localhost:3000/detailarticle/';
  private url3 = 'http://localhost:3000/recherche/';
  private url4 = 'http://localhost:3000/nouveautes/';
  private url5 = 'http://localhost:3000/meilleures-ventes/';
  private url6 = 'http://localhost:3000/genre-formation/';
  private url7 = 'http://localhost:3000/voir-offres/';

  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get<Array<Article>>(this.url);
  }


  getOneArticleById(refArticle: string) {
    return this.http.get<Article>(this.url2 + refArticle);
  }
  getArticlesBySearch(toSearch: string) {
    return this.http.get<Array<Article>>(this.url3 + toSearch);
  }
  getNouveautes() {
    return this.http.get<Array<Article>>(this.url4);
  }
  getMeilleuresVentes() {
    return this.http.get<Array<Article>>(this.url5);
  }
  getGenreFormation() {
    return this.http.get<Array<Article>>(this.url6);
  }

  getAllFromOptions(option: string) {
    return this.http.get<Array<Article>>(this.url7 + option);
  }
  
}

