// declaring variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//game logic

while (isSunk == false) {
    guess = prompt ("puhon (Enter a number 0-6)");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid call number")
    }else{
        guesses = guesses + 1;

        if (guess == loaction || guess == location2 || guess == location3) {
            hits = hits + 1;

            if (hits == 3){
                isSunk = true;
                alert("You sank my battleship!")
            }
        }
    }
}
var stats = "You sank my battleship at" + guesses + " guesses, " + "Your Accuracy is: " + (3/guesses);

alert(stats); 