//console.log(document);
const primoP = document.getElementById("primoP");
primoP.textContent = "ciao";
primoP.style.backgroundColor = "red";
const pCollection = document.getElementsByTagName("p");
//console.log(pCollection);
pCollection[1].style.backgroundColor = "green";
for(p of pCollection)
{
    p.style.backgroundColor = "blue";
}
const pList = document.querySelectorAll("p");
//console.log(pList);
pList.forEach(p => p.style.backgroundColor = "yellow");
pList.forEach(p => p.style.padding = "10px");
pList.forEach(p => p.style.margin = "50px");

//Creazione di un nuovo elemento
const newP = document.createElement("p");
newP.textContent = "Nuovo paragrafo creato con JS";
newP.style.backgroundColor = "purple";
const body = document.getElementById("body");
body[0].appendChild(newP);
console.log(body);

const newP2 = document.createElement("p");
newP2.textContent = "Secondo paragrafo creato con JS";
newP2.style.backgroundColor = "cyan";
body[0].insertBefore(newP2, body[0].childNodes[0]);