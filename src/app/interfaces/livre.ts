import { Article } from "./article";
import { Auteur } from "./auteur";

export interface Livre extends Article {
    numISBN? : string,
    titre?  : string,
    format? : string,
    auteurs? : Auteur[]
}
