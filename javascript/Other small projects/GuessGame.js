function GuessingGame() {
    let total = 100;
    let score = 0;
    let data = (Math.random() * total).toFixed(0);
    let counter = 0;
    while (data) {
        let guess = prompt(" please enter a number")
        if (guess > data && guess >= 0 && guess <= 100) {
            console.log("your guess is greater");
        }
        else if (guess < data && guess >= 0 && guess <= 100) {
            console.log("your guess is smaller");
        }
        else if (guess == data) {
            console.log("Right..!");
            break;
        }
        else {
            console.log("Please select between 1-100");
        }
        counter++;
    }
    score = total - counter;
    return score;
}
console.log("Your score is : ", GuessingGame())