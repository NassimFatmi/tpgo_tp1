/* 

	You need npm (Node.js) to run the code
	=> Type in the command line: node versionConsole.js

*/

const PMAX = 12;

class Objet {
	constructor(poids, valeur) {
		this.poids = poids;
		this.valeur = valeur;
	}
}

let objets = [
	new Objet(2, 5),
	new Objet(3, 8),
	new Objet(5, 14),
	new Objet(2, 6),
	new Objet(4, 13),
	new Objet(6, 17),
	new Objet(3, 10),
	new Objet(1, 4),
];

const sacADos = (objets) => {
	let p = [];
	objets.unshift(new Objet(0, 0));
	for (let i = 0; i < objets.length; i++) {
		p.push([]);
		for (let j = 0; j <= PMAX; j++) {
			if (j === 0 || i === 0) {
				p[i][j] = 0;
			} else if (j < objets[i].poids && i > 0) {
				p[i][j] = p[i - 1][j];
			} else {
				p[i][j] = Math.max(
					p[i - 1][j],
					p[i - 1][j - objets[i].poids] + objets[i].valeur
				);
			}
		}
	}
	return [p[objets.length - 1][PMAX], p];
};

console.log("#".repeat(40));
for (let i in objets) {
	console.log(
		`Objet[${i}] => poids: ${objets[i].poids} | valeur: ${objets[i].valeur}`
	);
}

let [optimal, matriceDesValeur] = sacADos(objets);

console.log("#".repeat(40));
console.log(matriceDesValeur);
console.log("#".repeat(40));

console.log("La solution optimal est: ", optimal);
