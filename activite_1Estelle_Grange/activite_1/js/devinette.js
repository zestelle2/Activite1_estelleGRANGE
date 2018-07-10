/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

// F12 
console.log("Bienvenue dans ce jeu de devinette !");
console.log("Le but de ce jeu est deviner un nombre. Ce nombre est choisi \n" + "aléatoirement"
    + " par l'ordinateur, devine le ! 6 essais")

//variables
var nombre_Demander, essai_restant = 6;
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

/* demande à l'utilisateur de saisir un chiffre tant que la solution n'a
pas était trouvée et que les nombre d'essaie n'est pas égal à zéro */


do {

    //demande à l'utilisateur une saisie (un chiffre entre 0 et 100)
    nombre_Demander = Number(prompt("Entre un chiffre (entre 0 et 100) pour deviner le nombre aléatoire\n"
        + "reste " + essai_restant + " restant"));

    //les différents conditions
    if (nombre_Demander > solution && nombre_Demander < 100) {
        essai_restant--;
        alert("Perdu , votre nombre est trop grand, mhouahahahhaha, il vous reste " + essai_restant + " essais restants");
    } else if (nombre_Demander < solution) {
        essai_restant--;
        alert("Perdu , votre nombre est trop petit, mhouahahahhaha, il vous reste " + essai_restant + " essais restants");
    } else if (nombre_Demander > 100) {
        essai_restant--;
        alert("écoute un peu les consignes ton nombre est supérieur à 100 ! " + essai_restant + " essais restant");
    } else if (nombre_Demander === solution) {
        alert("bravo, vous etes dieu !!!");
    }
} while (nombre_Demander != solution && essai_restant != 0);

//affiche la solution
alert("La solution était " + solution);






// TODO : complétez le programme