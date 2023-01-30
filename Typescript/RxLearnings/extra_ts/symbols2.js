"use strict";
const Black = Symbol("black");
const Blue = Symbol("blue");
const Red = Symbol("red");
const Grey = "grey";
function again(data) {
    switch (data) {
        case Red:
            return "laal";
        case Blue:
            return "nila";
        case Black:
            return "kala";
        case Grey:
            return "grey";
        default:
            return "nahi mila";
    }
}
console.log(again(Black));
console.log(again(Blue));
console.log(again(Red));
console.log(again(Grey));
