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

