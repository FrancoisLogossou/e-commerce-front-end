import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Personne } from 'src/app/interfaces/personne';
import { ArticleService } from 'src/app/services/article.service';

import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // livres: Livre[] = [{ numISBN: 'ffezfzfzffez', titre: 'salut à tous', format: 'poche', refArticle: 1, imageArticle: 'https://static.fnac-static.com/multimedia/Images/FR/NR/62/ff/a9/11140962/1507-0/tsp20191031071127/Turquie-le-livre-de-cuisine.jpg' },
  // { numISBN: 'aaaaaaaaaaa', titre: 'comment ça va', format: 'manteau', refArticle: 2, imageArticle : 'https://images-na.ssl-images-amazon.com/images/I/71uFN8LvWwL.jpg' },
  // { numISBN: 'bbbbbbbb', titre: 'oui et toi', format: 'pantalon', refArticle: 3, imageArticle: 'https://www.lhommemoderne.fr/10462-19712-thickbox/livre-les-contes-de-perrault.jpg'}];
  personne: Personne = {};
  article: Article = {};
  articles: Article[] = [];
  nouveautes: Article[] = [];
  meilleuresVentes: Article[] = [];
  genreFormation: Article[] = [];
  user="";
  urlCourant ='';
  constructor(private articleService: ArticleService, private gestionDuPanier : GestionDuPanierService,  private router: Router) { }

  ngOnInit(): void {
    this.initialize();
    
    
  }

  initialize() {
    this.articleService.getAllArticles().subscribe(
      (res) => {
        this.articles = res;
        this.user = JSON.parse(localStorage.getItem('user')?? '') ;
      }
    )
    this.articleService.getNouveautes().subscribe(
      (res) => {
        this.nouveautes = res;
        this.user = JSON.parse(localStorage.getItem('user')?? '') ;
      }
    )
    this.articleService.getMeilleuresVentes().subscribe(
      (res) => {
        this.meilleuresVentes = res;
        this.user = JSON.parse(localStorage.getItem('user')?? '') ;
      }
    )
    this.articleService.getGenreFormation().subscribe(
      (res) => {
        this.genreFormation = res;
        this.user = JSON.parse(localStorage.getItem('user')?? '') ;
      }
    )
   
  }

  ajouterAuPanier(refArticle: number, qte: string){
    this.articleService.getOneArticleById(refArticle.toString()).subscribe((res) => { 
      this.article = res; 
      this.gestionDuPanier.ajouterAuPanier(this.article, +qte);
    });
  }
  

  
}

