const btnAtk =document.getElementById("Choix_Atk");
const btnDef =document.getElementById("Choix_Def");
const btnFinTour = document.getElementById("Choix_Fin_Tour");

const Heros1 = document.getElementById("Archer")
const Heros2 = document.getElementById("Cochon")
const Heros3 = document.getElementById("Guerrier")
const Heros4 = document.getElementById("Geant")

const Monstre1 = document.getElementById("Mechant_1")
const Monstre2 = document.getElementById("Chef_Mechant")
const Monstre3 = document.getElementById("Mechant_2")

const PVH1 = document.getElementById("PVH1")
const PVH2 = document.getElementById("PVH2")
const PVH3 = document.getElementById("PVH3")
const PVH4 = document.getElementById("PVH4")

const PVM1 = document.getElementById("PVM1")
const PVM2 = document.getElementById("PVM2")
const PVM3 = document.getElementById("PVM3")

//Let
let SelectionHeros = false
let SelectionEnnemi = false
let actionH1 = true
let actionH2 = true
let actionH3 = true
let actionH4 = true

//Attaque du Heros

btnAtk.onclick=function()
{if (PVM1.innerHTML > 0 && SelectionEnnemi === true){
    PVM1.textContent -=10
    if (PVM1.innerHTML===0)
        Monstre1.src = "Second_Guerrier_Vilain_mort.png"
    }}

btnAtk.onclick=function()
{if (PVM2.innerHTML > 0 && SelectionEnnemi === true){
    PVM2.textContent -=10
    if (PVM2.innerHTML===0)
        Monstre1.src = "Chef_Monstre_mort.png"
    }}

{if (PVM3.innerHTML > 0 && SelectionEnnemi === true){
    PVM3.textContent -=10
    if (PVM3.innerHTML===0)
        Monstre3.src = "Guerrier_Vilain_mort.png"
    }
}

//Riposte du monstre

btnFinTour.onclick = function ()
{if (actionH1 === false && actionH2 === false && actionH3 === false && actionH4 === false){
    if (PVM1.innerHTML > 0){random = Math.floor(Math.random() * 4) + 1;
        alert(random);
        if (random ===1 && PVH1.textContent !=0){PVH1.textContent -= 12}
        if (random ===2 && PVH1.textContent !=0){PVH1.textContent -= 7}
        if (random ===3 && PVH1.textContent !=0){PVH1.textContent -= 8}
        if (random ===4 && PVH1.textContent !=0){PVH1.textContent -= 16}
    }}

    if (PVM2.innerHTML > 0){random = Math.floor(Math.random() * 4) + 1;
        alert(random);
        if (random ===1 && PVH1.textContent !=0){PVH1.textContent -= 16}
        if (random ===2 && PVH1.textContent !=0){PVH1.textContent -= 10}
        if (random ===3 && PVH1.textContent !=0){PVH1.textContent -= 12}
        if (random ===4 && PVH1.textContent !=0){PVH1.textContent -= 20}
    }}

    if (PVM2.innerHTML > 0){random = Math.floor(Math.random() * 4) + 1;
        alert(random);
        if (random ===1 && PVH1.textContent !=0){PVH1.textContent -= 12}
        if (random ===2 && PVH1.textContent !=0){PVH1.textContent -= 8}
        if (random ===3 && PVH1.textContent !=0){PVH1.textContent -= 10}
        if (random ===4 && PVH1.textContent !=0){PVH1.textContent -= 18}
    }



//Victoire

if (PVM1.innerHTML == 0 && PVM2.innerHTML == 0 && PVM3.innerHTML == 0 ){
    alert("Bien joué, Victoire")

}
//Défaite

if (PVH1.innerHTML == 0 && PVH2.innerHTML == 0 && PVH3.innerHTML == 0 && PVH4.innerHTML == 0){
    alert("Dommage, Défaite")}


//Selection Heros / Monstre ----------marche pas

Monstre1.onclick = function (){if (SelectionMonstre === true && PVM1.innerHTML > 0) {
    Monstre1.style.border = "10px green"
}}

Monstre2.onclick = function (){if (SelectionMonstre === true && PVM2.innerHTML > 0) {
    Monstre2.style.border = "10px green"
}}
Monstre3.onclick = function (){if (SelectionMonstre === true && PVM3.innerHTML > 0) {
    Monstre3.style.border = "10px green"
}}

Heros1.onclick = function (){if (SelectionHeros === true && PVM1.innerHTML > 0) {
    Heros1.style.border = "10px blue"
}}

Heros2.onclick = function (){if (SelectionHeros === true && PVM2.innerHTML > 0) {
    Heros2.style.border = "10px blue"
}}
        
Heros3.onclick = function (){if (SelectionHeros === true && PVM3.innerHTML > 0) {
    Heros3.style.border = "10px blue"
}}

 Heros4.onclick = function (){if (SelectionHeros === true && PVM4.innerHTML > 0) {
    Heros4.style.border = "10px blue"
}}