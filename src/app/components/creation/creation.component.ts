import { Component, OnInit } from '@angular/core';
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
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.initialize();
  }

  ajouterPersonne() {
    this.personneService.addPersonne(this.personne).subscribe(
      (res) => {
        this.initialize();
        this.personne = {};
      }
    );
  }
  initialize() {
    this.personneService.getAllPersonnes().subscribe(
      (res) => {
        this.personnes = res;
      }
    )
  }
}
