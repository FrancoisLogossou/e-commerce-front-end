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
  // [routerLink]='["/recherche", toSearch]'
}
