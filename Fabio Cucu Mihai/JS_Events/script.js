const btn = document.getElementById("crea");

btn.addEventListener("click", (event) => {
    const p = document.createElement("p");
    p.style.backgroundColor="lime";
    p.textContent="sono un p generato da js";
    document.body.appendChild(p);
});

const myDiv = document.getElementById("divprova");
myDiv.addEventListener("mouseenter", (e)=>{
    myDiv.style.padding='50px';
    myDiv.style.backgroundColor="yellow";
});

myDiv.addEventListener("mouseleave", (e)=>{
    myDiv.style.padding='0px';
    myDiv.style.backgroundColor="white";
});

const mySecondDiv = document.getElementById("divprova2");
myDiv.addEventListener("keydown", (e)=>{
    if (e.key === 'b')
});

myDiv.addEventListener("keyup", (e)=>{
    myDiv.style.padding='0px';
    myDiv.style.backgroundColor="white";
});