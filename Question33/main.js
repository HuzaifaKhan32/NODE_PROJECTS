var OridinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, OridinalNumbers_1 = OridinalNumbers; _i < OridinalNumbers_1.length; _i++) {
    var numbers = OridinalNumbers_1[_i];
    if (numbers == 1) {
        console.log("1st");
    }
    else if (numbers == 2) {
        console.log("2nd");
    }
    else if (numbers == 3) {
        console.log("3rd");
    }
    else {
        console.log(numbers + "th");
    }
}
