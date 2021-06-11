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

  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get<Array<Article>>(this.url);
  }
  getOneArticleById(refArticle: string) {
    return this.http.get<Article>(this.url2+refArticle);
  }
  getArticlesBySearch(toSearch : string){
    return this.http.get<Array<Article>>(this.url3+toSearch);
  }
}

