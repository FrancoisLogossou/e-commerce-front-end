import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { LivreComponent } from './components/livre/livre.component';
import { PersonneComponent } from './components/personne/personne.component';
import { AdresseComponent } from './components/adresse/adresse.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { HeaderComponent } from './components/header/header.component';
import { PanierComponent } from './components/panier/panier.component';
import { ArticleComponent } from './components/article/article.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RechercheComponent } from './components/recherche/recherche.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreationComponent } from './components/creation/creation.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ConfirmationCommandeComponent } from './components/confirmation-commande/confirmation-commande.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import {trigger,state,style,animate,transition}from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ConnexionComponent,
    LivreComponent,
    PersonneComponent,
    AdresseComponent,
    HeaderComponent,
    PanierComponent,
    DetailArticleComponent,
    ArticleComponent,
    RechercheComponent,
    FooterComponent,
    CreationComponent,
    CommandeComponent,
    ConfirmationCommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
