let count = 0  // initialize count to 0

function increaseCount() {
    count++;
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function increaseCount() {
    count++;
    displayCount();
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!")
    } else if (count === 20) {
        alert("Your instagram post gained 20 followers! Keep it up!")
    }
}

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}