import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Personne } from 'src/app/interfaces/personne';
import { ConnexionService } from 'src/app/services/connexion.service'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  personne: Personne = {};
  user = "";
  erreur = "";
  previousUrl = "../";
  constructor(private auth: ConnexionService,
    private router: Router
  ) { }
  // this.user = JSON.parse(localStorage.getItem('user')?? '') ;
  ngOnInit(): void {


  }
  connexion() {
    this.auth.checkData(this.personne).subscribe(
      res => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res));
          if (localStorage.getItem('url') == '/panier') {
            this.router.navigateByUrl('/panier');
          } else {
            this.router.navigateByUrl('/home');
          }
        } else {
          this.erreur = "Identifiant ou mot incorrects, cet utilisateur n'existe pas"
        }
      }
    )
  }
  deconnexion() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }
  isConnected() {
    if (localStorage.getItem('user')) {
      return true;
    }
      return false;
  }
}
