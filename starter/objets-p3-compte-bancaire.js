/*
OBJETS - PRÉPA 3 : Modélisation d'un compte bancaire
1. Crée un objet compte qui a :
   - une propriété titulaire valant "Alex"
   - une propriété solde valant initialement 0 ;
   - une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif)
     au solde du compte ;
   - une méthode decrire() renvoyant la description du compte.
2. Utilise cet objet pour
   - afficher sa description,
   - le créditer de 250,
   - puis le débiter de 80,
   - et enfin afficher de nouveau sa description.
*/

const compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function (montant){
      this.solde += montant;
    },
    decrire: function (){
        return "Titulaire : " + this.titulaire + ", Solde : " + this.solde + " euros";
    }
}

console.log(compte.decrire());
compte.crediter(250);
console.log("Crédit de 250 euros effectué.");
console.log(compte.decrire());

compte.crediter(-80);
console.log("Débit de 80 euros effectué.");
console.log(compte.decrire());

