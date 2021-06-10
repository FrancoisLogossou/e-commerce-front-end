import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  refArticle = '';
  article: Article = {};
  articles: Article[] = [];
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.refArticle = value.get('refArticle') ?? '';
        this.articleService.getOneArticleById(this.refArticle).subscribe((res) => {
          this.article = res; 
          console.log(this.article.resumeArticle)
        });
      });
  }

}
