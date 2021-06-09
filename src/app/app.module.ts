import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { LivreComponent } from './components/livre/livre.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonneComponent } from './components/personne/personne.component';
import { AdresseComponent } from './components/adresse/adresse.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ConnexionComponent,
    LivreComponent,
    MenuComponent,
    PersonneComponent,
    AdresseComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
