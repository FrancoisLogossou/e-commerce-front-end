import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  personne: Personne = {};
  article: Article = {};
  articles: Article[] = [];
  
  constructor(private articleService: ArticleService, private gestionDuPanier : GestionDuPanierService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  ngOnInit(): void {
    this.initialize();
    this.personne = JSON.parse(localStorage.getItem('user') ?? ''); 
    
  }

  initialize() {
    this.articleService.getAllArticles().subscribe(
      (res) => {
        this.articles = res;
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

