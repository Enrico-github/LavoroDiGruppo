/*gestione degli eventi
 1 - listener (eventi)
 2 - gestore eventi
*/

/*const btn = document.getElementById("crea");
btn.addEventListener("click",(event)=>{
    //istruzioni
    const p = document.createElement("p");
    p.style.backgroundColor="green";
    p.textContent="sono p generato da js";
    document.body.appendChild(p);
});

const mydiv= document.getElementById("divprova");
mydiv.addEventListener("mouseenter",(e)=>{
mydiv.style.padding='50px';
mydiv.style.backgroundColor="purple";
});

mydiv.addEventListener("mouseleave",()=>{
    mydiv.style.padding='0px';
    mydiv.style.backgroundColor="white";
    });
*/
    const mySeconddiv= document.getElementById("secondo");

    document.addEventListener("keydown",(event)=>{
        if(event.key=='b')
            mySeconddiv.style.backgroundColor="red";
    });

    document.addEventListener("keyup",(event)=>{
        if(event.key=='b')
            mySeconddiv.style.backgroundColor="white";
    });