/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
var magicionsNames = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great() {
    for (var i = 0; i < magicionsNames.length; i++) {
        magicionsNames[i] = "The Great ".concat(magicionsNames[i]);
    }
}
function show_magicion() {
    for (var _i = 0, magicionsNames_1 = magicionsNames; _i < magicionsNames_1.length; _i++) {
        var names = magicionsNames_1[_i];
        console.log(names);
    }
}
make_great();
show_magicion();
