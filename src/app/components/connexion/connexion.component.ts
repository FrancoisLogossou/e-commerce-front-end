import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Personne } from 'src/app/interfaces/personne';
import { User } from 'src/app/interfaces/user';
import { ConnexionService } from 'src/app/services/connexion.service'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  personne: Personne = {};
  user: User = {};
  erreur = "";
  previousUrl = "../";
  constructor(private auth: ConnexionService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    if (this.isConnected()) {
      this.initialize();
    }


  }

  initialize(){
    this.user = JSON.parse(localStorage.getItem('user') ?? '');
  }
  
  connexion() {
    this.auth.checkData(this.personne).subscribe(
      res => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res));
          
          if (this.user.typeUser == "administrateur") {
            this.router.navigateByUrl('/admin');
          } else  {
            if (localStorage.getItem('url') == '/panier') {
              this.router.navigateByUrl('/panier');
            } else {
              this.router.navigateByUrl('/home');
            }
          }
        }
        else {
          this.erreur = "Identifiant ou mot incorrects, cet utilisateur n'existe pas"
        }
      }
    )
  }
  deconnexion() {
    localStorage.removeItem('user');
  }
 


  isConnected() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
