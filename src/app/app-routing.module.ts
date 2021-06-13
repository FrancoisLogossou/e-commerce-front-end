import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './components/adresse/adresse.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { HomeComponent } from './components/home/home.component';
import { LivreComponent } from './components/livre/livre.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanierComponent } from './components/panier/panier.component';
import { PersonneComponent } from './components/personne/personne.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { CreationComponent } from './components/creation/creation.component';
import { CommandeComponent } from './components/commande/commande.component';
import { AuthGuard } from './guards/auth.guard';
import { VoirOffresComponent } from './components/voir-offres/voir-offres.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { ConfirmationCommandeComponent } from './components/confirmation-commande/confirmation-commande.component';

const routes: Routes = [
  { path: "recherche/:toSearch", component: RechercheComponent  },
  { path: "adresse", component: AdresseComponent},
  { path: "connexion", component: ConnexionComponent},
  { path: "creation", component: CreationComponent},
  { path: "home", component: HomeComponent },
  { path: "voir-offres/:option", component: VoirOffresComponent }, 
  { path: "detailarticle/:refArticle", component: DetailArticleComponent},
  { path: "livre", component: LivreComponent},
  { path: "personne", component: PersonneComponent},
  { path: "panier", component: PanierComponent },
  { path: "commande", component: CommandeComponent, canActivate: [AuthGuard]},
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
  { path: "confirmation-commande", component: ConfirmationCommandeComponent},
  { path: "not-found", component: NotFoundComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "**", redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
