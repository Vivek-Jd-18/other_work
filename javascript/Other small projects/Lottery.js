players=["Ankit","vishal","manali","vivek","pragati","parita","mayuri","nisarg","parth","kiran"]

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(players[(randomNumber(0,players.length-1)).toFixed(0)])

