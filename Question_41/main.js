/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
var Magiciansnames = ["Merlin", "Houdini", "David Copperfield", "Harry Potter"];
function magicions_name() {
    for (var _i = 0, Magiciansnames_1 = Magiciansnames; _i < Magiciansnames_1.length; _i++) {
        var name_1 = Magiciansnames_1[_i];
        console.log(name_1);
    }
}
magicions_name();
