import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Auteur } from 'src/app/interfaces/auteur';
import { ArticleService } from 'src/app/services/article.service';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  toSearch = '';
  auteur: Auteur = {};
  article: Article = {};
  articles: Article[] = [];

  constructor(private articleService: ArticleService,
    private gestionDuPanier: GestionDuPanierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.toSearch = value.get('toSearch') ?? '';           
        this.articleService.getArticlesBySearch(this.toSearch).subscribe((res) => {
          this.articles = res;
          // console.log(this.articles)
        });
      });
  }

  search(toSearch: string){
    this.router.navigateByUrl('/recherche/' + toSearch)
  }

  ajouterAuPanier(refArticle: number, qte:string){
    this.articleService.getOneArticleById(refArticle.toString()).subscribe((res) => { 
      this.article = res; 
      this.gestionDuPanier.ajouterAuPanier(this.article, +qte);
    });
  }
}
