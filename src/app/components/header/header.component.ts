import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toSearch2: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  search(toSearch2: string){

    this.router.navigateByUrl('/recherche/' + toSearch2)
  }
  stockerRoute(route: string){
    //  route = this.router.url;
    // if (localStorage.getItem('url') == '/panier') {
      
    // }
    localStorage.setItem('url', route);
    console.log(route);
  }
  // [routerLink]='["/recherche", toSearch]'
}
