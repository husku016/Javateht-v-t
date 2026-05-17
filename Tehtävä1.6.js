const vahvistus = confirm("Should I calculate the square root");

if (vahvistus === true){
    let numero = prompt("Anna luku");
    if (numero < 0){
        document.querySelector("#vastaus").innerHTML += "The square root of a negative number is not defined";
    }
    else{
        document.querySelector("#vastaus").innerHTML += Math.sqrt(numero);
    }
}
else{
    document.querySelector("#vastaus").innerHTML += "The square root is not calculated.";
}