let home = document.getElementById("home_score")
let guest = document.getElementById("guest_score")
let homescore = 0
let guestscore = 0

home.textContent = homescore
guest.textContent = guestscore

function home1() {
    homescore += 1
    home.textContent = homescore
}

function home2() {
    homescore += 2
    home.textContent = homescore
}

function home3() {
    homescore += 3
    home.textContent = homescore
}

function guest1() {
    guestscore += 1
    guest.textContent = guestscore
}

function guest2() {
    guestscore += 2
    guest.textContent = guestscore
}

function guest3() {
    guestscore += 3
    guest.textContent = guestscore
}

function newgame() {
    home.textContent = 0
    guest.textContent = 0
    homescore = 0
    guestscore = 0
}

if (homescore > guestscore) {
    console.log("Home is winning")
}


if (guestscore > homescore) {
    console.log("Guest is winning")
}
