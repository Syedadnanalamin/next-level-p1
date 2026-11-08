"use strict";
// problem 1
function multiplyValue(value, multiplier) {
    if (multiplier != undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
}
// problem 2
function processInput(value) {
    if (typeof value === "string") {
        return value.trim();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
}
let ans = processInput(10);
console.log(ans);
