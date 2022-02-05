var powitanieTekst = 'Witaj !!!';
powitanieTekst2 = 'Witaj2 !!!';
let pozegnanieTekst = 'Zegnaj !!!';
const dziendobryTekst = 'Dzien dobry';

function test(a) {
    var powitanieTekst = 'Funkcja';
    powitanieTekst = 'Funkcja';
    console.log(powitanieTekst, a);
}

test(5);
console.log(powitanieTekst);

//console.log(powitanieTekst, powitanieTekst2, pozegnanieTekst, dziendobryTekst);

function sprawdz(target) {
    var forma = document.querySelector('form');
    var imieWartosc = forma.imie.value;
    var blad = false;
    var ustawBlad = function (status, pole) {
        if (status) {
            pole.classList.remove('noerror');
        } else {
            pole.classList.add('noerror');
        }
    }

    var tablicaElementow = [
        {
            wartoscSpr: forma.imie.value,
            wyrazenie: /^([A-z]{3,})$/g,
            poleBlad: document.getElementById('imieblad')
        },
        {
            wartoscSpr: forma.nazwisko.value,
            wyrazenie: /^([A-z\-]{5,})$/g,
            poleBlad: document.getElementById('nazwiskoblad')
        },
        {
            wartoscSpr: forma.komentarz.value,
            wyrazenie: /^([A-z\-., ]{0,})$/g,
            poleBlad: document.getElementById('komentarzblad')
        }
    ];

    for (let x = 0; x < tablicaElementow.length; x++) {
        let sprawdzanyElement = tablicaElementow[x];
        if (sprawdzanyElement.wartoscSpr.match(sprawdzanyElement.wyrazenie)) {
            //ok
            ustawBlad(false, sprawdzanyElement.poleBlad);
        } else {
            //blad
            ustawBlad(true, sprawdzanyElement.poleBlad);
            blad = true;
        }
    }

    if (blad) {
        target.preventDefault();
    }

}

window.addEventListener('load', function () {
    var forma = document.querySelector('form');

    forma.addEventListener('submit', function (target) {
        sprawdz(target);
    } );
});

console.log('koniec');
