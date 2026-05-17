'use strict';
let numero1 = Number(prompt("Anna luku1: "));
let numero2 = Number(prompt("Anna luku2: "));
let numero3 = Number(prompt("Anna luku3: "));

let summaTul = numero1 + numero2 + numero3;
let tuloTul = numero1 * numero2 * numero3;
let keskiarvoTul = summaTul / 3;

document.querySelector("#summa").innerHTML += summaTul
document.querySelector("#tulo").innerHTML += tuloTul
document.querySelector("#keskiarvo").innerHTML += keskiarvoTul