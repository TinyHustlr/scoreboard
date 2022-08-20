let home = document.getElementById("home_score")
let guest = document.getElementById("guest_score")
let homeF = document.getElementById("home_foul")
let guestF = document.getElementById("guest_foul")

let homeScore = 0
let guestScore = 0
let homeFoul = 0
let guestFoul = 0

// Diplay initial scores as zero
home.textContent = homeScore
guest.textContent = guestScore
homeF.textContent = homeFoul
guestF.textContent = guestFoul

// Initial Text color
home.style.color = "rgb(246, 1, 157)"
guest.style.color = "rgb(246, 1, 157)"

// // Change text color for leader


// Scoring functions
function home1() {
    homeScore += 1
    home.textContent = homeScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

function home2() {
    homeScore += 2
    home.textContent = homeScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

function home3() {
    homeScore += 3
    home.textContent = homeScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

function guest1() {
    guestScore += 1
    guest.textContent = guestScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

function guest2() {
    guestScore += 2
    guest.textContent = guestScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

function guest3() {
    guestScore += 3
    guest.textContent = guestScore
    if (homeScore > guestScore) {
        home.style.color = "rgb(57, 21, 184)"
        guest.style.color = "rgb(246, 1, 157)"
    } else if (guestScore > homeScore) {
        guest.style.color = "rgb(57, 21, 184)"
        home.style.color = "rgb(246, 1, 157)"
    } else {
        home.style.color = "rgb(246, 1, 157)"
        guest.style.color = "rgb(246, 1, 157)"
    }
}

// Foul scoring
function homefoul() {
    homeFoul += 1
    homeF.textContent = homeFoul
}

function guestfoul() {
    guestFoul += 1
    guestF.textContent = guestFoul
}

function newgame() {
    home.textContent = 0
    guest.textContent = 0
    homeF.textContent = 0
    guestF.textContent = 0
    homeScore = 0
    guestScore = 0
    homeFoul = 0
    guestFoul = 0
    home.style.color = "rgb(246, 1, 157)"
    guest.style.color = "rgb(246, 1, 157)"
}