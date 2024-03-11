var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
var names_magicions = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great(magicion) {
    var newMagicion = __spreadArray([], magicion, true);
    for (var i = 0; i < newMagicion.length; i++) {
        newMagicion[i] = "The Great ".concat(newMagicion[i]);
    }
    return newMagicion;
}
function show_magicion(magicion) {
    for (var _i = 0, magicion_1 = magicion; _i < magicion_1.length; _i++) {
        var name_1 = magicion_1[_i];
        console.log(name_1);
    }
}
var great_magicion = make_great(names_magicions);
console.log("Original Array:");
show_magicion(names_magicions);
console.log("Array with added 'The Great':");
show_magicion(great_magicion);
