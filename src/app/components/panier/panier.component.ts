import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { LignePanier } from 'src/app/interfaces/ligne-panier';
import { ArticleService } from 'src/app/services/article.service';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  ligneArticles: LignePanier[] = [];
  allArticles: Article[] = [];
  article: Article = {};
  refsArticles: number[] = [];
  qtesArticles: number[] = [];
  prixTotal = 0;
  isValid: Boolean = true;


  constructor(
    private gestionDuPanier: GestionDuPanierService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  deleteArticle(refArticle: number) {
    this.gestionDuPanier.deleteArticle(refArticle);
    this.initialize();
  }

  augQuantite(refArticle: number) {
    this.gestionDuPanier.augQuantite(refArticle);
    this.initialize();
  }

  dimQuantite(refArticle: number) {
    this.gestionDuPanier.dimQuantite(refArticle);
    this.initialize();
  }
  initialize() {
    this.ligneArticles = this.gestionDuPanier.recupererPanier();
    this.prixTotal = this.gestionDuPanier.calculPrixTotal();
  }

  genererCmd() {
    // this.initialize();
    this.isValid = true;
    this.refsArticles = this.gestionDuPanier.getRefsInPanier();
    this.qtesArticles = this.gestionDuPanier.getQtesInPanier();
    this.articleService.getAllArticles().subscribe(
      (res) => {
        this.allArticles = res;
        // console.log(this.allArticles)
        // console.log(this.qtesArticles)
        // console.log(this.refsArticles)
        this.allArticles = this.allArticles.filter(elt => this.refsArticles.includes(elt.refArticle ?? 0))
        console.log(this.allArticles)
        for (let i = 0; i < this.refsArticles.length; i++) {
          if (this.qtesArticles[i] > (this.allArticles[i].qteStock ?? 0)) {
            this.isValid = false;
          }
        }
        if (this.isValid) {
          this.router.navigateByUrl('/commande')
        }
      });
  }

}
