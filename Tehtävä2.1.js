let n1 = prompt ("Anna numero")
let n2 = prompt ("toinen numero")
let n3 = prompt ("toinen numero")
let n4 = prompt ("toinen numero")
let n5 = prompt ("toinen numero")

let numerot = [n1,n2,n3,n4,n5]

for (let i = numerot.length - 1; i >= 0;i--) {
  console.log(numerot[i]);
}

