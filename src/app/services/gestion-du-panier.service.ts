import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Article } from '../interfaces/article';
import { LignePanier } from '../interfaces/ligne-panier';

@Injectable({
  providedIn: 'root'
})
export class GestionDuPanierService {
  panier: LignePanier[] = [];
  prixTotalArticle = 0;
  prixTotal = 0;
  ligneTemp2: LignePanier = {};
  refsArticlesInPanier: number[] = [];
  qtesArticlesInPanier: number[] = [];
  temp = '';
  temp2 = '';
  qte = 0;
  pu = 0;

  constructor() { }

  ajouterAuPanier(article: Article, qte : number) {
    if (localStorage.getItem('panier')) {
      this.findArticle(article.refArticle ?? 0)
      if (this.ligneTemp2.qteArticle) {
        this.ligneTemp2.qteArticle++;
      }
      else {
        this.panier.push(this.ligneTemp2 = { qteArticle: qte, article: article });
      }
      localStorage.setItem('panier', JSON.stringify(this.panier));
    }
    else {
      this.panier.push(this.ligneTemp2 = { qteArticle: 1, article: article });
      localStorage.setItem('panier', JSON.stringify(this.panier));
    }
  }
  recupererPanier() {
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    return this.panier;
  }

  deleteArticle(refArticle: number) {
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    this.panier = this.panier.filter(elt => elt.article!.refArticle != refArticle)
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  augQuantite(refArticle: number) {
    this.findArticle(refArticle)
    if (this.ligneTemp2.qteArticle != null && (this.ligneTemp2.article!.qteStock ?? 0) > this.ligneTemp2.qteArticle) {
      this.ligneTemp2.qteArticle++;
    }
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  dimQuantite(refArticle: number) {
    this.findArticle(refArticle)
    if (this.ligneTemp2.qteArticle && this.ligneTemp2.qteArticle > 1) {
      this.ligneTemp2.qteArticle--;
    }
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  calculPrixTotalArticle() {
    this.prixTotalArticle = 0;
    for (let index = 0; index < this.panier.length; index++) {
      this.temp2 = localStorage.getItem('panier') ?? '';
      this.panier = JSON.parse(this.temp2);
      const liArticle = this.panier[index];
      const qte =  liArticle.qteArticle;
      const pu = liArticle.article!.puht;
      this.prixTotalArticle = qte! * pu!;
    }
    return this.prixTotalArticle;
  }

  calculPrixTotal() {
    this.prixTotal = 0;
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    for (const elt of this.panier) {
      this.prixTotal += (elt.qteArticle ?? 0) * (elt.article!.puht ?? 0);
      this.prixTotal = +this.prixTotal;
    }
    return this.prixTotal;
  }

  findArticle(refArticle: number) {
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    return this.ligneTemp2 = this.panier.find(elt => elt.article?.refArticle == refArticle) ?? {};
  }
  getRefsInPanier() {
    this.refsArticlesInPanier = [];
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    for (const elt of this.panier) {
      this.refsArticlesInPanier.push(elt.article?.refArticle ?? 0)
    }
    return this.refsArticlesInPanier;
  }

  getQtesInPanier() {
    this.qtesArticlesInPanier = []
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    for (const elt of this.panier) {
      this.qtesArticlesInPanier.push(elt.qteArticle ?? 0)
    }
    return this.qtesArticlesInPanier;
  }
  

}
