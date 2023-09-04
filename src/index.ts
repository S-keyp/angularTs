import * as readlineSync from "readline-sync";
import axios from "axios";

console.clear();

console.log("** Administration Collegues **");
console.log("1. Lister les collègues");
console.log("99. Sortir");

// Stocker la liste des collègues
let collegues: any[] = [];

// URL de l'API à appeler pour lister les collègues
const API_all_colleagues =
  "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues";

// Fonction asynchrone pour récupérer la liste des collègues
async function fetchCollegues() {
  try {
    const response = await axios.get(API_all_colleagues);
    // Traitez ici la réponse de l'API
    collegues = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des collègues :", error);
  }
}

// Fonction principale asynchrone
async function main() {
  // Attendre que la liste des collègues soit récupérée
  await fetchCollegues();

  while (true) {
    // Saisie utilisateur
    const reponse = readlineSync.question("Votre choix : ");

    // Si la réponse est "99", on sort
    if (reponse === "99") {
      console.log("Au revoir");
      break;
    }

    // Si la réponse est "1", on affiche la liste des collègues
    if (reponse === "1") {
      console.log(">> Liste des collègues");

      // Afficher les informations de chaque collègue
      for (const collegue of collegues) {
        console.log("Pseudo :", collegue.pseudo);
        console.log("Photo :", collegue.photo);
        console.log("Score :", collegue.score);
        console.log("\n");
      }
    } else {
      console.log("Choix invalide, veuillez entrer 1 ou 99.");
    }
  }
}

// Appeler la fonction principale asynchrone pour démarrer le programme
main();