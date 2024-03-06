var names_magicions = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function make_great(magicion) {
    var newMagicion = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
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
console.log("Array with added 'The Great'");
show_magicion(great_magicion);
