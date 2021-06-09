import { Article } from "./article";

export interface Livre extends Article {
    numISBN : string,
    titre?  : string,
    format? : string,
}
