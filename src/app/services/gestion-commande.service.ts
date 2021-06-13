import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { Commande } from '../interfaces/commande';
import { CommandeList } from '../interfaces/commande-list';
import { LignePanier } from '../interfaces/ligne-panier';

@Injectable({
  providedIn: 'root'
})
export class GestionCommandeService {
  private commandeUrl = 'http://localhost:3000/commande/';
  private commandeLastIdUrl = 'http://localhost:3000/lastIdinDb';
  private commandeListUrl = 'http://localhost:3000/commandeList';

  constructor(private http: HttpClient) { }

  insertCommande(){
    return this.http.post<Commande>(this.commandeUrl, {
      idUser: 4
    }); 
  }

  insertListCommande(lignesCommande : LignePanier[], idCommande: number){
 
    return this.http.post<CommandeList>(this.commandeListUrl, {
      lignesCommande : lignesCommande,
      idCommande: idCommande
    }); 
  }

  updateStock(refArticle: number, qteStock: number) {
    return this.http.put<Article>(this.commandeUrl+refArticle,{qteStock: qteStock});
  }
}
