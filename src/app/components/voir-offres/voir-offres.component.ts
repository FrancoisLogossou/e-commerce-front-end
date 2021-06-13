import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-voir-offres',
  templateUrl: './voir-offres.component.html',
  styleUrls: ['./voir-offres.component.css']
})
export class VoirOffresComponent implements OnInit {
  optionsArticles: Article[] = [];
  option = "";
  article: Article = {};
  constructor(private articleService: ArticleService, private route: ActivatedRoute ,private gestionDuPanier: GestionDuPanierService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.option = value.get('option') ?? '';
        this.articleService.getAllFromOptions(this.option).subscribe((res) => {
          this.optionsArticles = res ; 
        });
      });
  }
  ajouterAuPanier(refArticle: number, qte: string){
    this.articleService.getOneArticleById(refArticle.toString()).subscribe((res) => { 
      this.article = res; 
      this.gestionDuPanier.ajouterAuPanier(this.article, +qte);
    });
  }
}
