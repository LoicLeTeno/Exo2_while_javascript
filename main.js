// ## exo 1
// let array = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama",];
// compt = 0;

// while (array.length i= ) {
//     console.log(`Bonjour, ${array[compt]}`);
//     compt = compt + 1;
// }


// ## exo 2
// let fruits = ["banane", "pêche", "fraise", "framboise", "kiwi", "pomme"];

// while (fruits.length > 0) {
//     fruits.pop();
//     console.log(fruits);
// }


// ## exo 3
// let panierLegumes = ["courgette", "brocoli", "salades", "poivrons"];
// let caisseLegumes = [];
// let longeur = panierLegumes.length ;

// while (longeur > 0) {
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
//     longeur--;
// }

// do {
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
// } while ((longeur = panierLegumes.length) > 0);

// console.log(panierLegumes, caisseLegumes);
// console.log(longeur);

// ## exo 4
// let vrai = "me me me";
// reponse = prompt("Qui est le meilleur ?");

// while (reponse != vrai) {
//     reponse = prompt("Qui est le meilleur ?");
// }

// alert("Bien, bien, bien !");


// ## exo 5
// let vrai = "me me me";

// do {
//     reponse = prompt("Qui est le meilleur ?");
// } while (reponse != vrai);

// alert("Bien, bien, bien !");


// ## exo 6
// const present = new Date();
// let ourYear = date.getFullYear();
// let random = Math.floor(Math.random() * (ourYear - 1970+1)) + 1970;
// let compt = 0;

// do {
//     reponse = +prompt(`Si je suis née ${random}, quel age ai-je aujourd’hui ?`);
//     compt++
//         if (reponse == ourYear - random) {
//             alert("Cest la bonne réponse");

//         } else {
//             alert("au-secours ");
//     }
// } while (compt < 3 || reponse != ourYear - random);


// // ## exo 7
// let panierFruits = [];

// while (panierFruits.length != 8) {
//     panierFruits.push(prompt("Remplissez le panier de fruit, jusqu'a obtenir 8 fruits"));
//     alert(panierFruits); //fin
// }

// let question = prompt("desire tu retirer un fruit ? ");

// let panierFruit = [];
// let reponse;
// let i = false;
// let compt = 0;

// while (i == false) {
//     if (compt < 8) {
//         reponse = prompt("Donnez moi un fruit");
//         reponse = reponse.substr(0, 1).toUpperCase() + reponse.slice(1);
//         panierFruit.push(reponse);
//         compt++;
//     }

//     if (compt == 8) {
//         alert(panierFruit);
//         reponse = prompt('Voulez vous retirer un fruit ?');
//         reponse = reponse.substr(0, 1).toUpperCase() + reponse.slice(1);
//         panierFruit.splice(panierFruit.indexOf(reponse), 1);

//         if (panierFruit.indexOf(reponse) == -1) {
//             i = true;
//         }
//     }
// }

// alert("Merci bonne appétit");
// alert(`Ceci est le dernière état de votre panier: ${panierFruit}`);