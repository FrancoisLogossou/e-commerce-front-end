import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { LignePanier } from 'src/app/interfaces/ligne-panier';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  ligneArticles: LignePanier[] = [];
  prixTotal = 0;
  

  constructor(private gestionDuPanier: GestionDuPanierService,
    private router: Router) { }

  ngOnInit(): void {
    this.ligneArticles = this.gestionDuPanier.recupererPanier();
    this.prixTotal = this.gestionDuPanier.calculPrixTotal();
  }

deleteArticle(refArticle : number){ 
 this.gestionDuPanier.deleteArticle(refArticle);
 this.ligneArticles = this.gestionDuPanier.recupererPanier();
 this.prixTotal = this.gestionDuPanier.calculPrixTotal();
}

augQuantite(refArticle : number){
  this.gestionDuPanier.augQuantite(refArticle);
  this.gestionDuPanier.recupererPanier();
}

dimQuantite(refArticle : number){
  this.gestionDuPanier.dimQuantite(refArticle);
  this.gestionDuPanier.recupererPanier();
}

passerCommande(){
  this.router.navigateByUrl('/commande');
}

}
