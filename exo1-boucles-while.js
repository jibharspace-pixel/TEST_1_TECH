let prixgta6= 50000;
let epargneHebdo = 4000; 
let epargne = 0;
let semaine = 0;
while (epargne < prixgta6) {
    epargne = epargne + epargneHebdo;
    semaine += 1;
}
console.log("Il faudra " + semaine + " semaines pour pouvoir acheter GTA 6.");