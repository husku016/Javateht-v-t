let count = Number(prompt("Kuinka monta osallistujaa?"));
let participants = [];

for (let i = 0; i < count; i++) {
  let name = prompt("Anna osallistujan nimi");
  participants.push(name);
}

participants.sort();

document.write("<ol>");
for (let i = 0; i < participants.length; i++) {
  document.write("<li>" + participants[i] + "</li>");
}
document.write("</ol>");
