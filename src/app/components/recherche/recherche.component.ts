import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  toSearch = '';
  articles: Article[] = [];
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.toSearch = value.get('toSearch') ?? '';
        this.articleService.getArticlesBySearch(this.toSearch).subscribe((res) => {
          this.articles = res;
          console.log(this.articles)
        });
      });
  }
}
