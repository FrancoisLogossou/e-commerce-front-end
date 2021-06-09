import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './components/adresse/adresse.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { HomeComponent } from './components/home/home.component';
import { LivreComponent } from './components/livre/livre.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: "adresse", component: AdresseComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "home", component: HomeComponent },
  { path: "detailarticle/:refArticle", component: DetailArticleComponent },
  { path: "livre", component: LivreComponent },
  { path: "menu", component: MenuComponent },
  { path: "personne", component: PersonneComponent},
  { path: "not-found", component: NotFoundComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
