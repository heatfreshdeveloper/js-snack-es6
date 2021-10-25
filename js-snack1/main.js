/* 1- Creiamo un array di oggetti
    -All'interno definiamo due proprietà principali: Nome e peso
   2-Dopo aver stabilito l'oggetto estrapoliamo le proprietà dall'array tramite il destructuring 
    - Poniamo una condizione IF che verifichi quale delle bici ha la proprietà peso minore 
   3-Creiamo una funzione che permetta di stampare a video tramite template literal il risultato del destructuring 

*/

'use strict';

// creiamo il nostro array di oggetti
let bici = [
    {
        nome: 'Specialized', 
        peso: 8
    },

    {
        nome: 'Scott',
        peso: 6
    },

    {
        nome: 'Bulls',
        peso: 7
    }, 

    {
        nome: 'Aerelli',
        peso: 10
    },

    {
        nome: 'Graziella',
        peso: 22
    }
];

let biciLeggera = bici[0];

// procediamo a destrutturare i nostri oggetti con le relative proprietà 

// let {nome, peso} = bici;

// function che ci indichi quale delle bici ha il peso minore e stampi con innerHTML il risultato

function pesoMinore() {
    for (let i = 0; i< bici.length; i++) {
        const weigth = bici[i].peso;

        if (weigth < biciLeggera.peso) {
            biciLeggera = bici[i];
        }
        
    }

    let {nome, peso} = bici;
}


