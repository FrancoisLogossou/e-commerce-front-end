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

  genererCmd() {

    this.order();

    //localStorage.removeItem('panier');
    //this.router.navigateByUrl('/home')
  }

  order() {
    this.gestionCommande.insertCommande().subscribe(
      (insertedCommande) => {
        this.gestionCommande.insertListCommande(this.lignesCommande, insertedCommande.idCommande ?? 0).subscribe(
          (listCommandeResult) => {
            for (const elt of this.lignesCommande) {
              this.gestionCommande.updateStock((elt.article?.refArticle ?? 0), ((elt.article?.qteStock ?? 0) - (elt.qteArticle ?? 0))).subscribe(
                (updateStockRes) => {

                }
              )
            }
            localStorage.removeItem('panier');
            this.router.navigateByUrl('/home')
          }
        )
      }
    )
  }
}