import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
temp = localStorage.getItem('user') ?? '';
  constructor() { }

  ngOnInit(): void {
  }

  // changeBouton(){
  //   this.temp = localStorage.getItem('user') ?? '';
  //   if (this.temp) {
  //     let tempButton = "<li><a routerLink='/connexion'>Déconnexion</a></li>"
  //     let deco = document.getElementById('lien-connexion');
  //     deco!.innerHTML = tempButton;
  //   }
  // }
}
