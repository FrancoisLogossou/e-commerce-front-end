import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  personne: Personne = {};
  personnes: Personne[] = [];
  isValid: boolean = true;
  erreur = "";
  constructor(
    private personneService: PersonneService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne() {
    this.personneService.getPersonneByEmail(this.personne.emailPersonne ?? '').subscribe((p) => {
      if (p.length == 0) {
        this.personneService.addPersonne(this.personne).subscribe(
          (res) => {
            this.personne = {};
            this.router.navigateByUrl('/home');
            alert('votre compte a été créé avec succès');
          }
        );
      } else {
        this.erreur = "L'adresse email saisie existe déjà";
      }
    }); 
  }
  initialize() {
    this.personneService.getAllPersonnes().subscribe(
      (res) => {
        this.personnes = res;
      }
    )
  }
}
