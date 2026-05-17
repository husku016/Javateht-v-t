let numerot = [];
let syote = Number(prompt("Anna numero (0 lopettaa):"));

while (syote !== 0) {
    numerot.push(syote);
    syote = Number(prompt("Anna numero (0 lopettaa):"));
}

numerot.sort((a, b) => b - a);

console.log(numerot);