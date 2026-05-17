let dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt("Anna koiran nimi"));
}

dogs.sort().reverse();

let ul = document.createElement("ul");

dogs.forEach(name => {
  let li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});

document.body.appendChild(ul);
