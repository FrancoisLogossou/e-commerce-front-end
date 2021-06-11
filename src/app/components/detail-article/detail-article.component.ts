import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Livre } from 'src/app/interfaces/livre';
import { ArticleService } from 'src/app/services/article.service';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  refArticle = '';
  article: Livre = {};
  articles: Livre[] = [];
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private gestionDuPanier: GestionDuPanierService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.refArticle = value.get('refArticle') ?? '';
        this.articleService.getOneArticleById(this.refArticle).subscribe((res) => {
          this.article = res; 
          console.log(this.article.resumeArticle)
          console.log(this.article.numISBN)
        });
      });
  }

  ajouterAuPanier(){
    this.articleService.getOneArticleById(this.refArticle.toString()).subscribe((res) => { 
      this.article = res; 
      this.gestionDuPanier.ajouterAuPanier(this.article);
    });

  }


}
