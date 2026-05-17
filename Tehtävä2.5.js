let numerot = [];
let syote = Number(prompt("Anna numero:"));

while (!numerot.includes(syote)) {
    numerot.push(syote);
    syote = Number(prompt("Anna numero:"));
}

console.log("Tämä numero on jo annettu:", syote);

numerot.sort((a, b) => a - b);

console.log("Kaikki annetut numerot:");
console.log(numerot);
