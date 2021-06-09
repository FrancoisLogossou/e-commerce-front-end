import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from 'src/app/interfaces/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  //livre: Livre = {};
  livres: Livre[] = [];
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.initialize();
  }
  
  initialize() {
    this.livreService.getAllPersonnes().subscribe(
      (res) => {
        this.livres = res;
      }
    )
  }
}
