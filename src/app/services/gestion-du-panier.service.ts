import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Article } from '../interfaces/article';
import { LignePanier } from '../interfaces/ligne-panier';

@Injectable({
  providedIn: 'root'
})
export class GestionDuPanierService {
  panier: LignePanier[] = [];
  // ligneTemp: LignePanier = {};
  prixTotal = 0;
  ligneTemp2: LignePanier = {};
  temp = '';


  constructor() { }

  ajouterAuPanier(article: Article) {
    if (localStorage.getItem('panier')) {
      this.findArticle(article.refArticle ?? 0)
      if (this.ligneTemp2.qteArticle) {
        this.ligneTemp2.qteArticle++;
      }
      else {
        this.panier.push(this.ligneTemp2 = { qteArticle: 1, article: article });
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

  augQuantite(refArticle: number){
    this.findArticle(refArticle)
    if (this.ligneTemp2.qteArticle != null) {
      this.ligneTemp2.qteArticle++;
    }
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  dimQuantite(refArticle: number){
    this.findArticle(refArticle)
    if (this.ligneTemp2.qteArticle && this.ligneTemp2.qteArticle > 1) {
      this.ligneTemp2.qteArticle--;
    }
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  calculPrixTotal(){
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    for (const elt of this.panier) {
      this.prixTotal += (elt.qteArticle  ?? 0) * (elt.article?.puht  ?? 0);
    }
    return this.prixTotal;
  }

  findArticle(refArticle : number){
    this.temp = localStorage.getItem('panier') ?? '';
    this.panier = JSON.parse(this.temp);
    return this.ligneTemp2 = this.panier.find(elt => elt.article?.refArticle == refArticle) ?? {};
  }


}
