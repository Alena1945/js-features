'use strict'
const getHole = index => document.getElementById(`hole${index}`);
const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');
let wings = parseInt(deadMole.textContent);
let losts = parseInt(lostMole.textContent);

function checkGame(deadMole, lostMole) {
    console.log(deadMole, lostMole);
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            deadMole.textContent = wings;
        } else {
            losts += 1;
            lostMole.textContent = losts;
        };
        checkGame(wings, losts);
    };
};