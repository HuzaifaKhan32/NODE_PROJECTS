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
