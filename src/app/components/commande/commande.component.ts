import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { LignePanier } from 'src/app/interfaces/ligne-panier';
import { GestionCommandeService } from 'src/app/services/gestion-commande.service';
import { GestionDuPanierService } from 'src/app/services/gestion-du-panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  lignesCommande: LignePanier[] = [];
  prixTotal = 0;
  
  constructor(
    private gestionDuPanier: GestionDuPanierService,
    private gestionCommande: GestionCommandeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initialize();
  }

initialize() {
  this.lignesCommande = this.gestionDuPanier.recupererPanier();
  this.prixTotal = this.gestionDuPanier.calculPrixTotal();
}

genererCmd(){
  for (const elt of this.lignesCommande) {
    console.log((elt.qteArticle ?? 0));
    this.updateStock((elt.article?.refArticle ?? 0), ((elt.article?.qteStock ?? 0) - (elt.qteArticle ?? 0)));
  }
   //this.router.navigateByUrl('/home')
}

updateStock(refAricle : number, qteStock : number){
  this.gestionCommande.updateStock(refAricle, qteStock).subscribe(
    (res)=> {
    }
  )
}

}