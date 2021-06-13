import { LignePanier } from "./ligne-panier";

export interface CommandeList {
    lignesCommande?: LignePanier[];
    idCommande?: number;
}
