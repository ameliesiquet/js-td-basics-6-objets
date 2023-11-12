/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const John = {
    nom:"John",
    poids: 75,
    taille: 1.80,

    BMIJohn: function (){
        this.bmi= this.poids/ (this.taille*this.taille);
        return this.bmi;
    }
};

const Mark= {
    nom:"Mark",
    poids:80,
    taille: 1.75,
    BMIMark: function (){
        this.bmi= this.poids/(this.taille*this.taille);
        return this.bmi;
    }
}

John.BMIJohn();
Mark.BMIMark();

if (Mark.bmi > John.bmi) {
    console.log(Mark.nom + " a un BMI plus élevé : " + Mark.bmi);
} else if (John.bmi > Mark.bmi) {
    console.log(john.nom + " a un BMI plus élevé : " + john.bmi);
} else {
    console.log(Mark.nom + " et " + John.nom + " ont le même BMI : " + Mark.bmi);
}
