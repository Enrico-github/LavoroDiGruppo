let js = "js è un bel linguaggio di programmazione";
console.log(js);
//Dinamicamente tipizzato
let age = 27;
console.log(age);
console.log(typeof age); //number
console.log(typeof js); //string

// number - string - boolean
// null - undefined - object - symbol - bigint

console.log(5 + '4')
let classe = '4F';
let indirizzo = 'Informatica';
let presentazione = 'Siamo in ${classe} e studiamo ${indirizzo}';
console.log(presentazione);
const inputYear = '2025';

if (12 === '12') { // === controlla anche il tipo
    console.log('12 è uguale a 12');
}
else {
    console.log('12 (number) è diverso da 12 (string)');
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i + ' è pari');
    } else {
        console.log(i + ' è dispari');
    }
}

console.log('fine ciclo for');

console.log(14>5 ? '14 è maggiore di 5' : '14 non è maggiore di 5');// 14>5 ? true : false
console.log(14<5 ? '14 è minore di 5' : '14 non è minore di 5');

const amici = ['Marco', 'Giovanni', 'Luca', 'Francesco'];
const amici2 = new Array('Marco', 'Giovanni', 'Luca', 'Francesco');
console.log(amici[0]); //Marco
console.log(amici); // ['Marco', 'Giovanni', 'Luca', 'Francesco']
amici.push('Giovanni'); //aggiunge Giovanni alla fine dell'array
console.log(amici); // ['Marco', 'Giovanni', 'Luca', 'Francesco', 'Giovanni']
amici.pop(); //rimuove l'ultimo elemento dell'array
console.log(amici); // ['Marco', 'Giovanni', 'Luca', 'Francesco']

function myFunction(var1, var2, var3) {
    //funzione che somma tre numeri
    return var1 + var2 + var3;
}

console.log(myFunction(1, 2, 3)); //6