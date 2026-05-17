'use strict'
let vuosiluku = +prompt("Anna vuosiluku");
if (vuosiluku % 4 == 0 && vuosiluku % 100 != 0 || vuosiluku % 400 == 0)
    {
        document.querySelector("#vastaus").innerHTML = "On karkausvuosi";
    }
else
    {
       document.querySelector("#vastaus").innerHTML = "Ei ole karkausvuosi";
    }