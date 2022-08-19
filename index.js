let home = document.getElementById("home_score")
let guest = document.getElementById("guest_score")
let homeScore = 0
let guestScore = 0

// Diplay initial scores as zero
home.textContent = homeScore
guest.textContent = guestScore

// Initial Text color
home.style.color = "rgb(246, 1, 157)"
guest.style.color = "rgb(246, 1, 157)"

// Change text color for leader
if (homeGreat > guestGreat) {
    home.style.color = "blue"
}

if (guestGreat > homeGreat) {
    guest.style.color = "blue"
}

// Scoring functions
function home1() {
    homeScore += 1
    home.textContent = homeScore
}

function home2() {
    homeScore += 2
    home.textContent = homeScore
}

function home3() {
    homeScore += 3
    home.textContent = homeScore
}

function guest1() {
    guestScore += 1
    guest.textContent = guestScore
    
}

function guest2() {
    guestScore += 2
    guest.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guest.textContent = guestScore
}

function newgame() {
    home.textContent = 0
    guest.textContent = 0
    homeScore = 0
    guestScore = 0
}



