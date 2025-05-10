/** DOM - document**/
/** BOM - window**/

/*
window.alert("Ciao 4F");
const numero = parseInt(window.prompt());
console.log(numero + 10);

console.log(window.screen.width);
console.log(window.screen.height);
*/

function checkLarghezza()
{
    const larghezza = window.innerWidth;
    const myp = document.getElementsByTagName("p");
    if (larghezza > 0 && larghezza <= 300)
    {
        console.log("Dispositivo largo quanto un telefono");
        
    }
    else if (larghezza <= 600)
    {
        console.log("Dispositivo largo quanto un tablet");
    }
    else if (larghezza > 600)
    {
        console.log("Dispositivo largo quanto un PC");
    }   
    else
    {
        console.log("Come sei riuscito ad avere uno schermo largo 0?");
    }
}

checkLarghezza();